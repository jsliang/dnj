$ = jQuery

$.fn.extend
    fixedScrollTopBar: (option = {opacity: 0.7})->
        scrolltop_bar = $(this).clone()
        $(this).css("opacity", 0)

        scrolltop_bar.css("bottom", 0)
            .css("position", "fixed")
            .css("width", "100%")
            .css("opacity", 0)
            .click slowly_scroll_top = ()->
                current_top = $(window).scrollTop()
                if current_top > 1
                    $(window).scrollTop( Math.round(current_top * 0.66) )
                    setTimeout(slowly_scroll_top, 50)
                else
                    $(window).scrollTop(0)
            .hover \
                ( ()->$(this).css("opacity", 1) ), \ #handlerIn
                ( ()->$(this).css("opacity", option.opacity) ) #handlerOut

        $(window).scroll ()->
            if scrolltop_bar.css("opacity") >= 1
                return

            if $(window).scrollTop() is 0 and scrolltop_bar.css("opacity") > 0
                scrolltop_bar.css("opacity", 0)
            else
                scrolltop_bar.css("opacity", option.opacity)

        $("body").append(scrolltop_bar)

    lazyLoad: ()->
        gallery = $(this)
        gallery.find("img").each ()->
            img = $(this)

            if img.position().top > $(window).height()
                img
                    .addClass("_image_not_loaded")
                    .hide() # hide image first
            else
                img.attr("src", img.attr("data-src"))

        $(window).scroll ()->
            gallery.find("._image_not_loaded").each ()->
                img = $(this)
                current_scrolltop = $(window).scrollTop()
                current_scrollbottom = $(window).scrollTop() + $(window).height()
                img_top = img.parent().position().top
                if img_top > current_scrolltop and img_top < current_scrollbottom
                    img.attr("src", img.attr("data-src")).show()
                    img.removeClass("_image_not_loaded")

    gallery: (img_info_items, option = {min_height: 200, margin: 6})->
        gallery = $(this)
        gallery.css("text-align", "center")

        get_large_img_path = (img_id)->
            img_path = img_info_items[img_id].path

            if img_path.search("flickr.com") isnt -1
                return img_info_items[img_id].path_large
            else # picasa
                pos_last_slash = img_path.lastIndexOf("/")
                img_file_name = img_path.substr(pos_last_slash, img_path.length - pos_last_slash)

                pos_2nd_last_slash = img_path.substr(0, pos_last_slash).lastIndexOf("/")
                img_path_prefix = img_path.substr(0, pos_2nd_last_slash)

                if $(window).width() > $(window).height()
                    screen_dimension_max = $(window).width() - 5
                else
                    screen_dimension_max = $(window).height() - 5

                return img_path_prefix.concat("/s#{ screen_dimension_max }").concat(img_file_name)

        get_display_image_url = (img_id)->
            return "display.html?key=" + encodeURIComponent(get_large_img_path(img_id))

        img_gallery = for img_id, img_info of img_info_items
            full_image_path = get_display_image_url(img_id)
            gallery.append("<a id='#{ img_id }' href='#{ full_image_path }' target='_blank'><img data-id='#{ img_id }' data-src='#{ img_info.path }'/></a>")

            $("#" + img_id)
                .data("orig_width", img_info.width)
                .data("orig_height", img_info.height)
                .css("margin", option.margin / 2)

            $("#" + img_id)._setHeight(option.min_height)

        gallery._relayout(img_info_items, option)

        $(window).resize ()->
            gallery.find("a").each ()->
                $(this).css("margin-left", option.margin / 2)
                $(this)._setHeight(option.min_height)
                full_image_path = get_display_image_url( $(this).find("img").attr("data-id") )
                $(this).find("img").attr("href", full_image_path)
            gallery._relayout(img_info_items, option)

    _setThumbSize: (width, height)->
        $(this)
            .data("current_width", width)
            .data("current_height", height)
            .width(width).height(height)
        $(this).find("img").width(width).height(height)

    _setHeight: (height)->
        orig_width = $(this).data("orig_width")
        orig_height = $(this).data("orig_height")

        width = height / orig_height * orig_width

        if width < orig_width and height < orig_height
            $(this)._setThumbSize(width, height)

    _resizeImage: (ratio)->
        orig_width = $(this).data("orig_width")
        orig_height = $(this).data("orig_height")
        current_width = $(this).data("current_width")
        current_height = $(this).data("current_height")
        new_width = current_width * ratio
        new_height = current_height * ratio

        if new_width < orig_width and new_height < orig_height
            $(this)._setThumbSize(new_width, new_height)
        else
            $(this)._setThumbSize(orig_width, orig_height)

    _relayout: (img_info_items, option)->
        max_total_width = $(this).innerWidth() - 10

        rows = {}
        $(this).find("a").each ()->
            top = $(this).position().top
            if rows[top]?
                rows[top].push $(this).attr("id")
            else
                rows[top] = [ $(this).attr("id") ]

        stretch_row = for row_top, img_id_list of rows
            # calculate current_total_width
            current_total_width = 0
            for img_id in img_id_list
                do (img_id)->
                    current_total_width += $("#" + img_id).data("current_width")
            # caculate resize ratio
            resize_ratio = (max_total_width - option.margin * (img_id_list.length - 1)) / current_total_width

            # resize images of this row according to resize_ratio
            for img_id in img_id_list
                do (img_id)->
                    $("#" + img_id)._resizeImage(resize_ratio)

            # center the row (if some image is not large enough, there'll be remaining space)
            first_pic = $("#" + img_id_list[0])
            last_pic = $("#" + img_id_list[img_id_list.length - 1])
            current_total_width = last_pic.width() + last_pic.position().left - first_pic.position().left
            $("#" + img_id_list[0]).css("margin-left", (max_total_width - current_total_width)/2)
