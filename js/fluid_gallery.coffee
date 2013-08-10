img_info_items = {
"000_74e0d699303ea06c4fac1fb9dedeae8b": {"path": "photos/P_20130726_145305.jpg", "height": 1536, "width": 2048},
"001_301c5dec6483298f75cfe4b2072a88e6": {"path": "photos/P_20130726_172519.jpg", "height": 2048, "width": 1536},
"002_726c42fea07f006ad94527aa7be545da": {"path": "photos/P_20130726_173556.jpg", "height": 2048, "width": 1536},
"003_1a66ecfffb3ed22afe8d01382a3b596a": {"path": "photos/P_20130726_180934.jpg", "height": 1324, "width": 2048},
"004_d0d939a95f9c4143f2f15dcfbdb2c005": {"path": "photos/P_20130726_181402.jpg", "height": 2048, "width": 1536},
"005_e2122c452efac9a9e5e72a9c75f7df46": {"path": "photos/P_20130726_181418.jpg", "height": 1536, "width": 2048},
"006_467b442668a44f8b08acf6ea565f23ea": {"path": "photos/P_20130726_181430.jpg", "height": 1536, "width": 2048},
"007_abdf6131dfdb630e98acaf736bae7a47": {"path": "photos/P_20130726_182002.jpg", "height": 1226, "width": 2048},
"008_362c08eeff4df32e908b96f2b4769238": {"path": "photos/P_20130726_185245.jpg", "height": 2048, "width": 1536},
"009_ad4b0644ea09cb33305544dd61efd01c": {"path": "photos/P_20130726_190933.jpg", "height": 2048, "width": 1536},
"010_5d54a51984474f4c31348a573b0a6c24": {"path": "photos/P_20130728_125106.jpg", "height": 1536, "width": 2048},
"011_ba40d9c8d66a1e1416ed53d1c54e486d": {"path": "photos/P_20130728_125118.jpg", "height": 1536, "width": 2048},
"012_69312c9521e79119bebe9dcd68c97104": {"path": "photos/P_20130728_133143.jpg", "height": 1536, "width": 2048},
"013_8deff758bbb1cfdcac9d4f40173561c8": {"path": "photos/P_20130728_133553.jpg", "height": 1536, "width": 2048},
"014_bc0c918baf3ff82358d49dc5204e2245": {"path": "photos/P_20130728_134840.jpg", "height": 2048, "width": 1536},
"015_03d6131b7ce839ecc9443520a9a704c6": {"path": "photos/P_20130729_100441.jpg", "height": 1536, "width": 2048},
"016_44a4fb043e4c9598aea3251a5073ba9d": {"path": "photos/P_20130729_100457.jpg", "height": 1536, "width": 2048},
"017_db412277a38e8021e1242a6b5ec8402b": {"path": "photos/P_20130729_100515.jpg", "height": 1536, "width": 2048},
"018_5d6c7b1d5bf60cec461211f3f083c46b": {"path": "photos/P_20130729_123351.jpg", "height": 1536, "width": 2048},
"019_5e9b2748b4162939dcae67ba173b14e4": {"path": "photos/P_20130729_130722.jpg", "height": 1536, "width": 2048},
"020_13f391d711050da92a5e27367aa0d70e": {"path": "photos/P_20130729_162603.jpg", "height": 1536, "width": 2048},
"021_27924afc04eaf90ad8e1e5d8f1b9749d": {"path": "photos/P_20130729_171837.jpg", "height": 1536, "width": 2048}
}

$ = jQuery

$.fn.extend
    gallery: (img_info_items, option = {min_height: 200, margin: 6})->
        gallery = $(this)

        img_gallery = for img_id, img_info of img_info_items
            gallery.append("<img id='#{ img_id }' src='#{ img_info.path }' />")

            $("#" + img_id).data("orig_width", img_info.width)
            $("#" + img_id).data("orig_height", img_info.height)
            $("#" + img_id).css("margin", option.margin / 2)

            $("#" + img_id)._setHeight(option.min_height)

        gallery._relayout(img_info_items, option)

        $(window).resize ()->
            gallery.children("img").each ()->
                $(this)._setHeight(option.min_height)
            gallery._relayout(img_info_items, option)

    _setHeight: (height)->
        orig_width = $(this).data("orig_width")
        orig_height = $(this).data("orig_height")

        width = height / orig_height * orig_width

        $(this).width(width).height(height)

    _resizeImage: (ratio) ->
        orig_width = $(this).data("orig_width")
        orig_height = $(this).data("orig_height")
        current_width = $(this).width()
        current_height = $(this).height()
        new_width = current_width * ratio
        new_height = current_height * ratio

        if new_width < orig_width and new_height < orig_height
            $(this).width(new_width).height(new_height)

    _relayout: (img_info_items, option)->
        max_total_width = $(this).innerWidth() - 10

        rows = {}
        $(this).children("img").each ()->
            top = $(this).position().top
            if rows[top]?
                rows[top].push $(this).attr("id")
            else
                rows[top] = [ $(this).attr("id") ]

        stretch_row = for row_top, img_id_list of rows
            # calculate current_total_width
            current_total_width = 0
            for img_id in img_id_list
                do (img_id) ->
                    current_total_width += $("#" + img_id).width()

            # caculate resize ratio
            resize_ratio = (max_total_width - option.margin * (img_id_list.length - 1)) / current_total_width

            # resize images of this row according to resize_ratio
            for img_id in img_id_list
                do (img_id) ->
                    $("#" + img_id)._resizeImage(resize_ratio)

$(document).ready ()->
    $("#gallery").gallery(img_info_items)