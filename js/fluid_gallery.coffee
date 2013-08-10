img_info_items = {
'000_e739737fc70a2d9ff229776452a0a500': {"path": "photos/P_20130726_145305_thumb.jpg", "height": 800, "width": 1066},
'001_e6111a85acaca2defdc620d810554592': {"path": "photos/P_20130726_172519_thumb.jpg", "height": 800, "width": 600},
'002_1dca694ad67e3f070d07b75ecbd04549': {"path": "photos/P_20130726_173556_thumb.jpg", "height": 800, "width": 600},
'003_a01c83f1022212bbe59ff14a9690c860': {"path": "photos/P_20130726_180934_thumb.jpg", "height": 800, "width": 1237},
'004_0a98ce1ff396006133911e9993617a0c': {"path": "photos/P_20130726_181402_thumb.jpg", "height": 800, "width": 600},
'005_093436be48634aa814e3626fa1c49633': {"path": "photos/P_20130726_181418_thumb.jpg", "height": 800, "width": 1066},
'006_55a45b1e84a024cc58f7c16cc620e4d0': {"path": "photos/P_20130726_181430_thumb.jpg", "height": 800, "width": 1066},
'007_47f7eda5d30fa0e87a5d54721cb33152': {"path": "photos/P_20130726_182002_thumb.jpg", "height": 800, "width": 1336},
'008_2de6fd00c3881531999b9d0076d330a4': {"path": "photos/P_20130726_185245_thumb.jpg", "height": 800, "width": 600},
'009_25246233b99f3c9dfe5b2496764330d7': {"path": "photos/P_20130726_190933_thumb.jpg", "height": 800, "width": 600},
'010_4dd04f2fda2863878c30aaf2f1716029': {"path": "photos/P_20130728_125106_thumb.jpg", "height": 800, "width": 1066},
'011_4e45cfc5386810faedc65676e360a3b5': {"path": "photos/P_20130728_125118_thumb.jpg", "height": 800, "width": 1066},
'012_9ef8717ebb1ebfea7b4957dc6455728d': {"path": "photos/P_20130728_133143_thumb.jpg", "height": 800, "width": 1066},
'013_b52b7dedb617dbde55c60427218a70a9': {"path": "photos/P_20130728_133553_thumb.jpg", "height": 800, "width": 1066},
'014_70a65391c62aed9ef86727183e1b9ebe': {"path": "photos/P_20130728_134840_thumb.jpg", "height": 800, "width": 600},
'015_8e45e21fa53942a2a37ea66dd75d06f1': {"path": "photos/P_20130729_100441_thumb.jpg", "height": 800, "width": 1066},
'016_20acd19ae6a9e0cf3644151e2729afe1': {"path": "photos/P_20130729_100457_thumb.jpg", "height": 800, "width": 1066},
'017_e857dd5e57ac3b2c666735f622e26290': {"path": "photos/P_20130729_100515_thumb.jpg", "height": 800, "width": 1066},
'018_cbaa4f13b9b2533c4df43e716e9bbc91': {"path": "photos/P_20130729_123351_thumb.jpg", "height": 800, "width": 1066},
'019_d5a039b27fdacc36e832abe6e94adf1f': {"path": "photos/P_20130729_130722_thumb.jpg", "height": 800, "width": 1066},
'020_e7653d4811098eab706412cf3cbd09fb': {"path": "photos/P_20130729_162603_thumb.jpg", "height": 800, "width": 1066},
'021_6bba884eb46a624a2e0459491fb243f1': {"path": "photos/P_20130729_171837_thumb.jpg", "height": 800, "width": 1066},
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