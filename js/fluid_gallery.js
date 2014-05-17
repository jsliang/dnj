(function() {
  var $, img_info_test;

  img_info_test = {
    '000_cb7a820586548352edd581e19db2a008': {
      "path_large": "https://farm3.staticflickr.com/2883/9581934291_78944dc642_o.jpg",
      "path": "https://farm3.staticflickr.com/2883/9581934291_b971006ca6_z.jpg",
      "height": 427,
      "width": 640
    },
    '001_2687a847054137ef586aae58ac024e74': {
      "path_large": "https://farm4.staticflickr.com/3734/9581934253_14f0383191_o.jpg",
      "path": "https://farm4.staticflickr.com/3734/9581934253_2535369007_z.jpg",
      "height": 427,
      "width": 640
    },
    '002_53677a8eecf3c9fc42c54b156af67a2a': {
      "path_large": "https://farm8.staticflickr.com/7429/9584720790_284e56c06e_o.jpg",
      "path": "https://farm8.staticflickr.com/7429/9584720790_f86c7e2982_z.jpg",
      "height": 427,
      "width": 640
    },
    '003_a815177c7fd946c2ca4b2e6e24ca7f75': {
      "path_large": "https://farm6.staticflickr.com/5512/9584720504_b85270ef51_o.jpg",
      "path": "https://farm6.staticflickr.com/5512/9584720504_49ac24ec99_z.jpg",
      "height": 427,
      "width": 640
    },
    '004_6dca25ade36839a95cf572c22a45c6be': {
      "path_large": "https://farm6.staticflickr.com/5546/9581934373_9c1fc6f377_o.jpg",
      "path": "https://farm6.staticflickr.com/5546/9581934373_cb030f1099_z.jpg",
      "height": 427,
      "width": 640
    },
    '005_4b099add682d22b5b98523152f9f064f': {
      "path_large": "https://farm6.staticflickr.com/5524/9581934417_918414eacc_o.jpg",
      "path": "https://farm6.staticflickr.com/5524/9581934417_dcd4336fdc_z.jpg",
      "height": 427,
      "width": 640
    },
    '006_c3ff87711954506f333cdc5796c9b131': {
      "path_large": "https://farm8.staticflickr.com/7380/9581934519_24d1c97846_o.jpg",
      "path": "https://farm8.staticflickr.com/7380/9581934519_51b05d2013_z.jpg",
      "height": 427,
      "width": 640
    },
    '007_ac0d130a4548165eb2aa4c00745149e9': {
      "path_large": "https://farm3.staticflickr.com/2813/9581934529_d0c7b7f6bf_o.jpg",
      "path": "https://farm3.staticflickr.com/2813/9581934529_661abeedd0_z.jpg",
      "height": 427,
      "width": 640
    },
    '008_b885262eeadba8f170a02c40be043b06': {
      "path_large": "https://farm8.staticflickr.com/7351/9581934617_b18e84ab04_o.jpg",
      "path": "https://farm8.staticflickr.com/7351/9581934617_ea2ef784d7_z.jpg",
      "height": 640,
      "width": 427
    },
    '009_d0dd25a463f819c60faeecb4d97217d3': {
      "path_large": "https://farm3.staticflickr.com/2812/9584721044_1a9d149fea_o.jpg",
      "path": "https://farm3.staticflickr.com/2812/9584721044_b18e84ab04_z.jpg",
      "height": 427,
      "width": 640
    },
    '010_b5504c2bdb2d3a613fdbcf6f76b39f41': {
      "path_large": "https://farm4.staticflickr.com/3825/9584721248_fe3785be32_o.jpg",
      "path": "https://farm4.staticflickr.com/3825/9584721248_25bc5452a2_z.jpg",
      "height": 427,
      "width": 640
    },
    '011_5656ba1ab81bbbda2a93b3af6acba4c4': {
      "path_large": "https://farm6.staticflickr.com/5502/9581934713_09b63058cd_o.jpg",
      "path": "https://farm6.staticflickr.com/5502/9581934713_c2927bf5fa_z.jpg",
      "height": 427,
      "width": 640
    },
    '012_ac3df0e21a271476152313e66878d011': {
      "path_large": "https://farm3.staticflickr.com/2884/9581934727_d9a2cc3ec4_o.jpg",
      "path": "https://farm3.staticflickr.com/2884/9581934727_06c27667b0_z.jpg",
      "height": 427,
      "width": 640
    },
    '013_9549c1fdce7bcf08daa2d82ae0f3aa17': {
      "path_large": "https://farm4.staticflickr.com/3690/9581933861_5af40688ef_o.jpg",
      "path": "https://farm4.staticflickr.com/3690/9581933861_be1e50cda9_z.jpg",
      "height": 427,
      "width": 640
    },
    '014_c7cb7e68c95df1fc17d6bd395a2f8456': {
      "path_large": "https://farm4.staticflickr.com/3755/9584721378_a4f20b0e4f_o.jpg",
      "path": "https://farm4.staticflickr.com/3755/9584721378_be3687a2e0_z.jpg",
      "height": 427,
      "width": 640
    },
    '015_558838bca6abc1d50e8f72a091c042e2': {
      "path_large": "https://farm8.staticflickr.com/7399/9581933803_c41ff112a5_o.jpg",
      "path": "https://farm8.staticflickr.com/7399/9581933803_5faa3efa1c_z.jpg",
      "height": 427,
      "width": 640
    },
    '016_0633713e2ed4e277b8f17abdf2ade03d': {
      "path_large": "https://farm4.staticflickr.com/3670/9581934913_a7ac6f2704_o.jpg",
      "path": "https://farm4.staticflickr.com/3670/9581934913_8fe39383e3_z.jpg",
      "height": 427,
      "width": 640
    },
    '017_e8449e5a5e4553068a370ddebb5042bd': {
      "path_large": "https://farm8.staticflickr.com/7305/9584721360_c928d6ce6f_o.jpg",
      "path": "https://farm8.staticflickr.com/7305/9584721360_04736ef09b_z.jpg",
      "height": 640,
      "width": 427
    },
    '018_e10d9e6fd53d69f1510527d7cfcbd61c': {
      "path_large": "https://farm6.staticflickr.com/5347/9581935231_6b7a4221c1_o.jpg",
      "path": "https://farm6.staticflickr.com/5347/9581935231_ae0e09bb80_z.jpg",
      "height": 427,
      "width": 640
    },
    '019_c70630d64bb4f2ab0de14680f150afc9': {
      "path_large": "https://farm3.staticflickr.com/2824/9584721516_287715022a_o.jpg",
      "path": "https://farm3.staticflickr.com/2824/9584721516_a7b98e603f_z.jpg",
      "height": 427,
      "width": 640
    },
    '020_5f4281018acdfb9d18de4711a64c5583': {
      "path_large": "https://farm8.staticflickr.com/7347/9584721568_74b5349ef8_o.jpg",
      "path": "https://farm8.staticflickr.com/7347/9584721568_3ab2d730ee_z.jpg",
      "height": 427,
      "width": 640
    },
    '021_daf641461448718effa72dd8c527e0cf': {
      "path_large": "https://farm6.staticflickr.com/5325/9581935341_5f1682a804_o.jpg",
      "path": "https://farm6.staticflickr.com/5325/9581935341_b72503504b_z.jpg",
      "height": 427,
      "width": 640
    },
    '022_6bb5345044eeecabc678b571e7a571ce': {
      "path_large": "https://farm4.staticflickr.com/3668/9581935319_9be339e646_o.jpg",
      "path": "https://farm4.staticflickr.com/3668/9581935319_37af3b5f0f_z.jpg",
      "height": 427,
      "width": 640
    },
    '023_7ce1bf33c65e94b23f0970b0d7bb8a2b': {
      "path_large": "https://farm8.staticflickr.com/7352/9581935367_289e807a5a_o.jpg",
      "path": "https://farm8.staticflickr.com/7352/9581935367_0835365144_z.jpg",
      "height": 427,
      "width": 640
    },
    '024_3bff0bbd17ba3696712acabc9d51868a': {
      "path_large": "https://farm4.staticflickr.com/3775/9581935487_eaee8e0ac5_o.jpg",
      "path": "https://farm4.staticflickr.com/3775/9581935487_1fb00e2339_z.jpg",
      "height": 427,
      "width": 640
    },
    '025_1f76ec9b089a1b7b2f184526855035b9': {
      "path_large": "https://farm8.staticflickr.com/7339/9584721890_31bb7689e8_o.jpg",
      "path": "https://farm8.staticflickr.com/7339/9584721890_4cd67174b8_z.jpg",
      "height": 427,
      "width": 640
    },
    '026_6c8f03dee4f6585eec15c3ca4172df43': {
      "path_large": "https://farm4.staticflickr.com/3766/9584721884_ef2776565e_o.jpg",
      "path": "https://farm4.staticflickr.com/3766/9584721884_97cfdb5a76_z.jpg",
      "height": 427,
      "width": 640
    },
    '027_e1aff4b35d05e5a7d7ad9acfa65dccfd': {
      "path_large": "https://farm4.staticflickr.com/3720/9584721996_0946f3215b_o.jpg",
      "path": "https://farm4.staticflickr.com/3720/9584721996_b0fdce4ae6_z.jpg",
      "height": 640,
      "width": 427
    },
    '028_1550030b8c53c1f592f3ce8e0546c4e0': {
      "path_large": "https://farm3.staticflickr.com/2893/9581935677_247f245aa2_o.jpg",
      "path": "https://farm3.staticflickr.com/2893/9581935677_6019c2eea3_z.jpg",
      "height": 427,
      "width": 640
    },
    '029_5777c8fab9a2f0c0ddc565e2e862122b': {
      "path_large": "https://farm6.staticflickr.com/5541/9581935701_f53eb38a90_o.jpg",
      "path": "https://farm6.staticflickr.com/5541/9581935701_b5def297f7_z.jpg",
      "height": 640,
      "width": 427
    },
    '030_20298cc4c29c846451eb11df39c18ba3': {
      "path_large": "https://farm6.staticflickr.com/5322/9584722036_fdb4dfd838_o.jpg",
      "path": "https://farm6.staticflickr.com/5322/9584722036_f0c84d6688_z.jpg",
      "height": 427,
      "width": 640
    },
    '031_b8640870022fee5d8f839a30dc583029': {
      "path_large": "https://farm3.staticflickr.com/2818/9581935877_6fdb95180f_o.jpg",
      "path": "https://farm3.staticflickr.com/2818/9581935877_cce45caa7a_z.jpg",
      "height": 427,
      "width": 640
    },
    '032_af76898cbc02b52cedbb29dde726957b': {
      "path_large": "https://farm4.staticflickr.com/3781/9581935815_deb73877be_o.jpg",
      "path": "https://farm4.staticflickr.com/3781/9581935815_9383c68ddd_z.jpg",
      "height": 427,
      "width": 640
    },
    '033_d8bd7adc2b1ad350bc12d92fd3913524': {
      "path_large": "https://farm4.staticflickr.com/3693/9584722300_4bbd856394_o.jpg",
      "path": "https://farm4.staticflickr.com/3693/9584722300_2536c1e0f2_z.jpg",
      "height": 427,
      "width": 640
    },
    '034_656f340d3f3dfe77c10b71d81d1b40ac': {
      "path_large": "https://farm8.staticflickr.com/7380/9584722360_11c89483e9_o.jpg",
      "path": "https://farm8.staticflickr.com/7380/9584722360_710e179124_z.jpg",
      "height": 640,
      "width": 427
    },
    '035_7d753b5f98231ebbec6f5f340b0d2478': {
      "path_large": "https://farm6.staticflickr.com/5327/9584722382_7799b16337_o.jpg",
      "path": "https://farm6.staticflickr.com/5327/9584722382_f16703ebd3_z.jpg",
      "height": 427,
      "width": 640
    },
    '036_ae37f3c2aa95df34373660872dbaf41a': {
      "path_large": "https://farm4.staticflickr.com/3695/9584722510_ec2fdecedd_o.jpg",
      "path": "https://farm4.staticflickr.com/3695/9584722510_fd4f551bd0_z.jpg",
      "height": 427,
      "width": 640
    },
    '037_244683f43f71d41fe90995e316f1557a': {
      "path_large": "https://farm3.staticflickr.com/2830/9581933723_12c11129ec_o.jpg",
      "path": "https://farm3.staticflickr.com/2830/9581933723_643f929f13_z.jpg",
      "height": 640,
      "width": 427
    },
    '038_5e8d8e707eee1e12f976d594abd0aa18': {
      "path_large": "https://farm3.staticflickr.com/2843/9584722564_d664d58d75_o.jpg",
      "path": "https://farm3.staticflickr.com/2843/9584722564_9cb27e4387_z.jpg",
      "height": 427,
      "width": 640
    },
    '039_c2902229a0597c608fd8acd278bc3dcb': {
      "path_large": "https://farm3.staticflickr.com/2892/9584722584_b8b2ea8dc9_o.jpg",
      "path": "https://farm3.staticflickr.com/2892/9584722584_b8feed083c_z.jpg",
      "height": 427,
      "width": 640
    },
    '040_895dabc30981a13f1559fc9bd1f86539': {
      "path_large": "https://farm6.staticflickr.com/5477/9584722616_ece1433c33_o.jpg",
      "path": "https://farm6.staticflickr.com/5477/9584722616_cc123b6aea_z.jpg",
      "height": 640,
      "width": 427
    },
    '041_52573ba9cdea06fafb325a4fb0324b18': {
      "path_large": "https://farm4.staticflickr.com/3719/9581936399_243c71c8ae_o.jpg",
      "path": "https://farm4.staticflickr.com/3719/9581936399_92179590db_z.jpg",
      "height": 427,
      "width": 640
    },
    '042_cf3dd60593fbc66e9ed5c5e21c8c5126': {
      "path_large": "https://farm8.staticflickr.com/7282/9581934119_7a9e95afe1_o.jpg",
      "path": "https://farm8.staticflickr.com/7282/9581934119_cd92ee5824_z.jpg",
      "height": 427,
      "width": 640
    },
    '043_3a77080ad1335cfa48b2ba40faad6bc9': {
      "path_large": "https://farm6.staticflickr.com/5493/9584720556_43d533364a_o.jpg",
      "path": "https://farm6.staticflickr.com/5493/9584720556_35cafed5f2_z.jpg",
      "height": 427,
      "width": 640
    },
    '044_1c2cf1cd71867e36e07591bb0ed63198': {
      "path_large": "https://farm4.staticflickr.com/3772/9581934125_c9bfe706d3_o.jpg",
      "path": "https://farm4.staticflickr.com/3772/9581934125_2b16f878d1_z.jpg",
      "height": 427,
      "width": 640
    },
    '045_eb83bf2e62c0e94584044b3ba688831b': {
      "path_large": "https://farm8.staticflickr.com/7390/9581933537_509c7e013d_o.jpg",
      "path": "https://farm8.staticflickr.com/7390/9581933537_8cc3f5cfd3_z.jpg",
      "height": 427,
      "width": 640
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

  $(document).ready(function() {
    $("#gallery").gallery(img_info_test);
    return $("#scroll-top-bar").fixedScrollTopBar().lazyLoad();
  });

}).call(this);
