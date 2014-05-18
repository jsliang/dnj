(function() {
  var $;

  $ = jQuery;

  $.fn.extend({
    fixedScrollTopBar: function(option) {
      var scrolltop_bar, slowly_scroll_top;

      if (option == null) {
        option = {
          opacity: 0.7
        };
      }
      scrolltop_bar = $(this).clone();
      $(this).css("opacity", 0);
      scrolltop_bar.css("bottom", 0).css("position", "fixed").css("width", "100%").css("opacity", 0).click(slowly_scroll_top = function() {
        var current_top;

        current_top = $(window).scrollTop();
        if (current_top > 1) {
          $(window).scrollTop(Math.round(current_top * 0.66));
          return setTimeout(slowly_scroll_top, 50);
        } else {
          return $(window).scrollTop(0);
        }
      }).hover((function() {
        return $(this).css("opacity", 1);
      }), (function() {
        return $(this).css("opacity", option.opacity);
      }));
      $(window).scroll(function() {
        if (scrolltop_bar.css("opacity") >= 1) {
          return;
        }
        if ($(window).scrollTop() === 0 && scrolltop_bar.css("opacity") > 0) {
          return scrolltop_bar.css("opacity", 0);
        } else {
          return scrolltop_bar.css("opacity", option.opacity);
        }
      });
      return $("body").append(scrolltop_bar);
    },
    fixedNavBar: function() {
      var scrolltop_bar;

      scrolltop_bar = $(this);
      return $(window).scroll(function() {
        if ($(window).scrollTop() === 0 && scrolltop_bar.hasClass("floatnav")) {
          return scrolltop_bar.removeClass("floatnav");
        } else if ($(window).scrollTop() <= scrolltop_bar.height() && !scrolltop_bar.hasClass("floatnav")) {
          scrolltop_bar.addClass("floatnav");
          $("body").css("margin-top", scrolltop_bar.height());
          return scrolltop_bar.css("margin-top", -scrolltop_bar.height());
        } else if ($(window).scrollTop() > scrolltop_bar.height() && !scrolltop_bar.hasClass("floatnav")) {
          return scrolltop_bar.addClass("floatnav");
        }
      });
    },
    lazyLoad: function() {
      var gallery;

      gallery = $(this);
      gallery.find("img").each(function() {
        var img;

        img = $(this);
        if (img.position().top > $(window).height()) {
          return img.addClass("_image_not_loaded").hide();
        } else {
          return img.attr("src", img.attr("data-src"));
        }
      });
      return $(window).scroll(function() {
        return gallery.find("._image_not_loaded").each(function() {
          var current_scrollbottom, current_scrolltop, img, img_top;

          img = $(this);
          current_scrolltop = $(window).scrollTop();
          current_scrollbottom = $(window).scrollTop() + $(window).height();
          img_top = img.parent().position().top;
          if (img_top > current_scrolltop && img_top < current_scrollbottom) {
            img.attr("src", img.attr("data-src")).show();
            return img.removeClass("_image_not_loaded");
          }
        });
      });
    },
    gallery: function(img_info_items, option) {
      var full_image_path, gallery, get_display_image_url, get_large_img_path, img_gallery, img_id, img_info;

      if (option == null) {
        option = {
          min_height: 200,
          margin: 6
        };
      }
      gallery = $(this);
      gallery.css("text-align", "center");
      get_large_img_path = function(img_id) {
        var img_file_name, img_path, img_path_prefix, pos_2nd_last_slash, pos_last_slash, screen_dimension_max;

        img_path = img_info_items[img_id].path;
        if (img_path.search("flickr.com") !== -1) {
          return img_info_items[img_id].path_large;
        } else {
          pos_last_slash = img_path.lastIndexOf("/");
          img_file_name = img_path.substr(pos_last_slash, img_path.length - pos_last_slash);
          pos_2nd_last_slash = img_path.substr(0, pos_last_slash).lastIndexOf("/");
          img_path_prefix = img_path.substr(0, pos_2nd_last_slash);
          if ($(window).width() > $(window).height()) {
            screen_dimension_max = $(window).width() - 5;
          } else {
            screen_dimension_max = $(window).height() - 5;
          }
          return img_path_prefix.concat("/s" + screen_dimension_max).concat(img_file_name);
        }
      };
      get_display_image_url = function(img_id) {
        return "display.html?key=" + encodeURIComponent(get_large_img_path(img_id));
      };
      img_gallery = (function() {
        var _results;

        _results = [];
        for (img_id in img_info_items) {
          img_info = img_info_items[img_id];
          full_image_path = get_display_image_url(img_id);
          gallery.append("<a id='" + img_id + "' href='" + full_image_path + "' target='_blank'><img data-id='" + img_id + "' data-src='" + img_info.path + "'/></a>");
          $("#" + img_id).data("orig_width", img_info.width).data("orig_height", img_info.height).css("margin", option.margin / 2);
          _results.push($("#" + img_id)._setHeight(option.min_height));
        }
        return _results;
      })();
      gallery._relayout(img_info_items, option);
      return $(window).resize(function() {
        gallery.find("a").each(function() {
          $(this).css("margin-left", option.margin / 2);
          $(this)._setHeight(option.min_height);
          full_image_path = get_display_image_url($(this).find("img").attr("data-id"));
          return $(this).find("img").attr("href", full_image_path);
        });
        return gallery._relayout(img_info_items, option);
      });
    },
    _setThumbSize: function(width, height) {
      $(this).data("current_width", width).data("current_height", height).width(width).height(height);
      return $(this).find("img").width(width).height(height);
    },
    _setHeight: function(height) {
      var orig_height, orig_width, width;

      orig_width = $(this).data("orig_width");
      orig_height = $(this).data("orig_height");
      width = height / orig_height * orig_width;
      if (width < orig_width && height < orig_height) {
        return $(this)._setThumbSize(width, height);
      }
    },
    _resizeImage: function(ratio) {
      var current_height, current_width, new_height, new_width, orig_height, orig_width;

      orig_width = $(this).data("orig_width");
      orig_height = $(this).data("orig_height");
      current_width = $(this).data("current_width");
      current_height = $(this).data("current_height");
      new_width = current_width * ratio;
      new_height = current_height * ratio;
      if (new_width < orig_width && new_height < orig_height) {
        return $(this)._setThumbSize(new_width, new_height);
      } else {
        return $(this)._setThumbSize(orig_width, orig_height);
      }
    },
    _relayout: function(img_info_items, option) {
      var current_total_width, first_pic, img_id, img_id_list, last_pic, max_total_width, resize_ratio, row_top, rows, stretch_row;

      max_total_width = $(this).innerWidth() - 10;
      rows = {};
      $(this).find("a").each(function() {
        var top;

        top = $(this).position().top;
        if (rows[top] != null) {
          return rows[top].push($(this).attr("id"));
        } else {
          return rows[top] = [$(this).attr("id")];
        }
      });
      return stretch_row = (function() {
        var _fn, _fn1, _i, _j, _len, _len1, _results;

        _results = [];
        for (row_top in rows) {
          img_id_list = rows[row_top];
          current_total_width = 0;
          _fn = function(img_id) {
            return current_total_width += $("#" + img_id).data("current_width");
          };
          for (_i = 0, _len = img_id_list.length; _i < _len; _i++) {
            img_id = img_id_list[_i];
            _fn(img_id);
          }
          resize_ratio = (max_total_width - option.margin * (img_id_list.length - 1)) / current_total_width;
          _fn1 = function(img_id) {
            return $("#" + img_id)._resizeImage(resize_ratio);
          };
          for (_j = 0, _len1 = img_id_list.length; _j < _len1; _j++) {
            img_id = img_id_list[_j];
            _fn1(img_id);
          }
          first_pic = $("#" + img_id_list[0]);
          last_pic = $("#" + img_id_list[img_id_list.length - 1]);
          current_total_width = last_pic.width() + last_pic.position().left - first_pic.position().left;
          _results.push($("#" + img_id_list[0]).css("margin-left", (max_total_width - current_total_width) / 2));
        }
        return _results;
      })();
    }
  });

}).call(this);
