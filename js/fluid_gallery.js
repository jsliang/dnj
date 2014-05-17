(function() {
  var $, img_info_test;

  img_info_test = {
    '000_3833edd026f4d7bb70e04226189cad27': {
      "path": "https://farm3.staticflickr.com/2883/9581934291_b971006ca6_c.jpg",
      "height": 534,
      "width": 800
    },
    '001_cb6d856bc2a1b3a6102d7b43cc69615c': {
      "path": "https://farm4.staticflickr.com/3734/9581934253_2535369007_c.jpg",
      "height": 534,
      "width": 800
    },
    '002_5c9677164165e32b1226bcc9d1b68e1c': {
      "path": "https://farm8.staticflickr.com/7429/9584720790_f86c7e2982_c.jpg",
      "height": 534,
      "width": 800
    },
    '003_80fb997ec4b8401bf5bfd2aa060b4d5d': {
      "path": "https://farm6.staticflickr.com/5512/9584720504_49ac24ec99_c.jpg",
      "height": 534,
      "width": 800
    },
    '004_954c1c0d09a558088cd91aacc04bb8c3': {
      "path": "https://farm6.staticflickr.com/5546/9581934373_cb030f1099_c.jpg",
      "height": 534,
      "width": 800
    },
    '005_24b5c899b1c6499aa7055294ca1ff312': {
      "path": "https://farm6.staticflickr.com/5524/9581934417_dcd4336fdc_c.jpg",
      "height": 534,
      "width": 800
    },
    '006_d0cdb33eac28e7c231b815747368b6d7': {
      "path": "https://farm8.staticflickr.com/7380/9581934519_51b05d2013_c.jpg",
      "height": 534,
      "width": 800
    },
    '007_14df7e7a7996a93b510c02984592dc77': {
      "path": "https://farm3.staticflickr.com/2813/9581934529_661abeedd0_c.jpg",
      "height": 534,
      "width": 800
    },
    '008_42b2c1fab860edcdbcf31cc38787272f': {
      "path": "https://farm8.staticflickr.com/7351/9581934617_ea2ef784d7_c.jpg",
      "height": 800,
      "width": 534
    },
    '009_d080b5304c26a84d48c316a25c04b844': {
      "path": "https://farm3.staticflickr.com/2812/9584721044_b18e84ab04_c.jpg",
      "height": 534,
      "width": 800
    },
    '010_61d9c7fb67e0878eb734c40577d85419': {
      "path": "https://farm4.staticflickr.com/3825/9584721248_25bc5452a2_c.jpg",
      "height": 534,
      "width": 800
    },
    '011_a2787059a1e7ad9e5273cb170d98950c': {
      "path": "https://farm6.staticflickr.com/5502/9581934713_c2927bf5fa_c.jpg",
      "height": 534,
      "width": 800
    },
    '012_289a36306fc07e70025dcf452d70f0fd': {
      "path": "https://farm3.staticflickr.com/2884/9581934727_06c27667b0_c.jpg",
      "height": 534,
      "width": 800
    },
    '013_143a0a48831e98a7212e4d0875ae31b6': {
      "path": "https://farm4.staticflickr.com/3690/9581933861_be1e50cda9_c.jpg",
      "height": 534,
      "width": 800
    },
    '014_7cdca30a7431c34eb5f0816c60d9b302': {
      "path": "https://farm4.staticflickr.com/3755/9584721378_be3687a2e0_c.jpg",
      "height": 534,
      "width": 800
    },
    '015_141a0053b8a6070c50326c96c8afd678': {
      "path": "https://farm8.staticflickr.com/7399/9581933803_5faa3efa1c_c.jpg",
      "height": 534,
      "width": 800
    },
    '016_2024c142956a3a87faf971443f9e5eb1': {
      "path": "https://farm4.staticflickr.com/3670/9581934913_8fe39383e3_c.jpg",
      "height": 534,
      "width": 800
    },
    '017_14e8cb1328ce53e8a75d15068757ffa9': {
      "path": "https://farm8.staticflickr.com/7305/9584721360_04736ef09b_c.jpg",
      "height": 800,
      "width": 534
    },
    '018_01d8dd047f01f80816b5de994f557dd5': {
      "path": "https://farm6.staticflickr.com/5347/9581935231_ae0e09bb80_c.jpg",
      "height": 534,
      "width": 800
    },
    '019_95ccac7b3f0d49ad0fef33d9650dcee2': {
      "path": "https://farm3.staticflickr.com/2824/9584721516_a7b98e603f_c.jpg",
      "height": 534,
      "width": 800
    },
    '020_8b942f566a3cd9835da50a52a76eb9eb': {
      "path": "https://farm8.staticflickr.com/7347/9584721568_3ab2d730ee_c.jpg",
      "height": 534,
      "width": 800
    },
    '021_4e17a65c04a4773f40be97f67d4509a9': {
      "path": "https://farm6.staticflickr.com/5325/9581935341_b72503504b_c.jpg",
      "height": 534,
      "width": 800
    },
    '022_5061861785fe55eb38f63ebc8b04d604': {
      "path": "https://farm4.staticflickr.com/3668/9581935319_37af3b5f0f_c.jpg",
      "height": 534,
      "width": 800
    },
    '023_02340ce8219a297b9836336f3d60e486': {
      "path": "https://farm8.staticflickr.com/7352/9581935367_0835365144_c.jpg",
      "height": 534,
      "width": 800
    },
    '024_4f6685ff30f98ed8da90042991f4a438': {
      "path": "https://farm4.staticflickr.com/3775/9581935487_1fb00e2339_c.jpg",
      "height": 534,
      "width": 800
    },
    '025_030f5c6f7420ca8fd31cae0091d6a274': {
      "path": "https://farm8.staticflickr.com/7339/9584721890_4cd67174b8_c.jpg",
      "height": 534,
      "width": 800
    },
    '026_2226b2b68cac46a3ad11842b600695db': {
      "path": "https://farm4.staticflickr.com/3766/9584721884_97cfdb5a76_c.jpg",
      "height": 534,
      "width": 800
    },
    '027_6d68af8675526ef6ca43d5976a271b0f': {
      "path": "https://farm4.staticflickr.com/3720/9584721996_b0fdce4ae6_c.jpg",
      "height": 800,
      "width": 534
    },
    '028_dfb37fb353699c4dd7e0c9a764423b56': {
      "path": "https://farm3.staticflickr.com/2893/9581935677_6019c2eea3_c.jpg",
      "height": 534,
      "width": 800
    },
    '029_bba9cca742e7b1d358e6f35cd9870c33': {
      "path": "https://farm6.staticflickr.com/5541/9581935701_b5def297f7_c.jpg",
      "height": 800,
      "width": 534
    },
    '030_634812cb9b0c51323371e76bc92babaf': {
      "path": "https://farm6.staticflickr.com/5322/9584722036_f0c84d6688_c.jpg",
      "height": 534,
      "width": 800
    },
    '031_4d4823497f76a2c008b51a38041ba4a8': {
      "path": "https://farm3.staticflickr.com/2818/9581935877_cce45caa7a_c.jpg",
      "height": 534,
      "width": 800
    },
    '032_dd80376866ddf3818a41735130d7e48d': {
      "path": "https://farm4.staticflickr.com/3781/9581935815_9383c68ddd_c.jpg",
      "height": 534,
      "width": 800
    },
    '033_f682bd4fa1ad7c34830c4219e53fd5dc': {
      "path": "https://farm4.staticflickr.com/3693/9584722300_2536c1e0f2_c.jpg",
      "height": 534,
      "width": 800
    },
    '034_57d2364f042533b0696ca441bb5f3061': {
      "path": "https://farm8.staticflickr.com/7380/9584722360_710e179124_c.jpg",
      "height": 800,
      "width": 534
    },
    '035_a07fefc9aa7433a1f97a2b6398e69ec6': {
      "path": "https://farm6.staticflickr.com/5327/9584722382_f16703ebd3_c.jpg",
      "height": 534,
      "width": 800
    },
    '036_ff7c86404dff0fefdcd760d150436912': {
      "path": "https://farm4.staticflickr.com/3695/9584722510_fd4f551bd0_c.jpg",
      "height": 534,
      "width": 800
    },
    '037_8cfcd36d9da1ce75748dc0d408b3bdbd': {
      "path": "https://farm3.staticflickr.com/2830/9581933723_643f929f13_c.jpg",
      "height": 800,
      "width": 534
    },
    '038_7b4217fd31780257678ac3abb7e6bd86': {
      "path": "https://farm3.staticflickr.com/2843/9584722564_9cb27e4387_c.jpg",
      "height": 534,
      "width": 800
    },
    '039_b1afc56cd478e0f4036418786ffeae77': {
      "path": "https://farm3.staticflickr.com/2892/9584722584_b8feed083c_c.jpg",
      "height": 534,
      "width": 800
    },
    '040_bd1e2b7b8940625679272cbebceb8ab3': {
      "path": "https://farm6.staticflickr.com/5477/9584722616_cc123b6aea_c.jpg",
      "height": 800,
      "width": 534
    },
    '041_d1586e71c3e1a0d1dd321f8413b4b432': {
      "path": "https://farm4.staticflickr.com/3719/9581936399_92179590db_c.jpg",
      "height": 534,
      "width": 800
    },
    '042_4187ea7edcb6c355916f1f3736442573': {
      "path": "https://farm8.staticflickr.com/7282/9581934119_cd92ee5824_c.jpg",
      "height": 534,
      "width": 800
    },
    '043_857b25e994402890b8ac42f3c0597cd2': {
      "path": "https://farm6.staticflickr.com/5493/9584720556_35cafed5f2_c.jpg",
      "height": 534,
      "width": 800
    },
    '044_ce8c69c1bfc2c3ce9843702b832f4271': {
      "path": "https://farm4.staticflickr.com/3772/9581934125_2b16f878d1_c.jpg",
      "height": 534,
      "width": 800
    },
    '045_f26b8d12e3e32bb027ffbf014edc1f71': {
      "path": "https://farm8.staticflickr.com/7390/9581933537_8cc3f5cfd3_c.jpg",
      "height": 534,
      "width": 800
    }
  };

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
      get_large_img_path = function(img_path) {
        var img_file_name, img_path_prefix, pos_2nd_last_slash, pos_last_slash, screen_dimension_max;

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
      };
      get_display_image_url = function(img_path) {
        return "display.html?key=" + encodeURIComponent(get_large_img_path(img_path));
      };
      img_gallery = (function() {
        var _results;

        _results = [];
        for (img_id in img_info_items) {
          img_info = img_info_items[img_id];
          full_image_path = get_display_image_url(img_info.path);
          gallery.append("<a id='" + img_id + "' href='" + full_image_path + "' target='_blank'><img data-src='" + img_info.path + "' /></a>");
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
          full_image_path = get_display_image_url($(this).find("img").attr("data-src"));
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

  $(document).ready(function() {
    $("#gallery").gallery(img_info_test);
    return $("#scroll-top-bar").fixedScrollTopBar().lazyLoad();
  });

}).call(this);
