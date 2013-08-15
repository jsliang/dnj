$ = jQuery

getUrlVar = (key)->
    result = new RegExp(key + "=([^&]*)", "i").exec(window.location.search);
    return result && unescape(result[1]) || ""

$(document).ready ()->
    $("#img-container").css("width", $(window).width())
    $("#img-container").css("height", $(window).height())

    img_path = decodeURIComponent(getUrlVar("key"))
    $("#img-container").css("background-image", "url(#{ img_path })")

    set_image_size = ()->
        $("#img-container").css("width", $(window).width())
        $("#img-container").css("height", $(window).height())

    set_image_size()
    $(window).resize(set_image_size)