#!/usr/bin/python

"""

Retrieve links to photo thumbnails in a Google Plus album, and return a {path, width, height} dictionary of each photo.

Album URL and maximum thumbnail dimension are both customizable.

"""

import gdata.geo
import gdata.media
import gdata.photos.service
import hashlib
import json

# ============== #
# SETTINGS BEGIN #
# ============== #

# source album of photos
gplus_album_url = "https://plus.google.com/photos/100962871525684315897/albums/5635621775055301585"

# maximum photo thumbnail dimension
max_thumb_dimension = 700

# ============== #
# SETTINGS  END  #
# ============== #


# DO NOT MODIFY CODES BELOW  #

def get_userid_albumid(url):
    """
    Retrieve userid & albumid from Google Plus album URL

    >>> get_userid_albumid("https://plus.google.com/photos/103268673393726667616/albums/5906286878841962305/")
    {'albumid': '5906286878841962305', 'userid': '103268673393726667616'}

    >>> get_userid_albumid("https://plus.google.com/photos/103268673393726667616/albums/5906286878841962305")
    {'albumid': '5906286878841962305', 'userid': '103268673393726667616'}

    >>> get_userid_albumid("http://plus.google.com/photos/103268673393726667616/albums/5906286878841962305")
    {'albumid': '5906286878841962305', 'userid': '103268673393726667616'}

    >>> get_userid_albumid("https://plus.google.com/photos/103268673393726667616")

    >>> get_userid_albumid("https://plus.google.com/photos/whatsnew")

    >>> get_userid_albumid("https://www.facebook.com/")
    """
    # url =
    # https://plus.google.com/photos/103268673393726667616/albums/5906286878841962305/

    # trim last slash
    if url.endswith("/"):
        url = url[0:len(url) - 1]

    try:
        [__, userid_str, __, albumid_str] = url.rsplit("/", 3)

        # userid_str & albumid_str shall be integers
        # if they aren't, most probably the URL is not in an expected format
        userid = int(userid_str)
        albumid = int(albumid_str)

        return {"userid": "%d" % userid, "albumid": "%d" % albumid}
    except ValueError:
        return None


def get_album_img_info_items(album_info, max_thumb_dimension):
    userid = album_info["userid"]
    albumid = album_info["albumid"]

    img_info_items = {}
    gd_client = gdata.photos.service.PhotosService()
    photos = gd_client.GetFeed(
        '/data/feed/api/user/%s/albumid/%s?kind=photo' % (userid, albumid))
    for photo in photos.entry:
        photo_url = photo.content.src
        photo_url_split = photo_url.rsplit("/", 1)

        thumbnail_url = "/".join(
            [photo_url_split[0], "s%d" % max_thumb_dimension, photo_url_split[1]])

        width = float(photo.width.text)
        height = float(photo.height.text)
        if width > height:
            thumb_width = max_thumb_dimension
            thumb_height = max_thumb_dimension / width * height
        else:
            thumb_height = max_thumb_dimension
            thumb_width = max_thumb_dimension / height * width

        img_info = {"path": thumbnail_url,
                    "width": int(thumb_width),
                    "height": int(thumb_height)}

        m = hashlib.md5()
        m.update("%(path)s %(width)s %(height)s" % img_info)
        img_id = "%03d_%s" % (len(img_info_items), m.hexdigest())
        img_info_item = {img_id: img_info}

        img_info_items.update(img_info_item)

    return img_info_items

if __name__ == "__main__":
    album_info = get_userid_albumid(gplus_album_url)
    img_info_items = get_album_img_info_items(album_info, max_thumb_dimension)

    json_str = "{"
    for key in sorted(img_info_items.iterkeys()):
        json_str += "'%s': %s," % (key, json.dumps(img_info_items[key]))
    json_str += "}"
    print json_str.replace("},}", "}}")
