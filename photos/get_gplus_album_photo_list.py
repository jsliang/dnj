#!/usr/bin/python

import gdata.geo
import gdata.media
import gdata.photos.service
import hashlib
import json

gplus_album_url = "https://plus.google.com/photos/103268673393726667616/albums/5906286878841962305/"

def get_userid_albumid(url):
    """
    Retrieve userid & albumnid from Google Plus album URL

    >>> get_userid_albumid("https://plus.google.com/photos/103268673393726667616/albums/5906286878841962305/")
    {'albumnid': '5906286878841962305', 'userid': '103268673393726667616'}

    >>> get_userid_albumid("https://plus.google.com/photos/103268673393726667616/albums/5906286878841962305")
    {'albumnid': '5906286878841962305', 'userid': '103268673393726667616'}

    >>> get_userid_albumid("http://plus.google.com/photos/103268673393726667616/albums/5906286878841962305")
    {'albumnid': '5906286878841962305', 'userid': '103268673393726667616'}

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
        [__, userid, __, albumnid] = url.rsplit("/", 3)

        userid_test_int = int(userid)
        albumnid_test_int = int(albumnid)

        return {"userid": userid, "albumnid": albumnid}
    except ValueError:
        return None


def get_album_img_info_items(album_info, max_size):
    userid = album_info["userid"]
    albumnid = album_info["albumnid"]

    img_info_items = {}
    gd_client = gdata.photos.service.PhotosService()
    photos = gd_client.GetFeed(
        '/data/feed/api/user/%s/albumid/%s?kind=photo' % (userid, albumnid))
    for photo in photos.entry:
        photo_url = photo.content.src
        photo_url_split = photo_url.rsplit("/", 1)

        thumbnail_url = "/".join(
            [photo_url_split[0], "s%d" % max_size, photo_url_split[1]])

        img_info = {"path": thumbnail_url,
                    "width": int(photo.width.text),
                    "height": int(photo.height.text)}

        m = hashlib.md5()
        m.update("%(path)s %(width)s %(height)s" % img_info)
        img_id = "%03d_%s" % (len(img_info_items), m.hexdigest())
        img_info_item = {img_id: img_info}

        img_info_items.update(img_info_item)

    return img_info_items

if __name__ == "__main__":
    album_info = get_userid_albumid(gplus_album_url)
    max_size = 800
    img_info_items = get_album_img_info_items(album_info, max_size)

    print "img_info_items = {"
    for key in sorted(img_info_items.iterkeys()):
        print "'%s': %s," % (key, json.dumps(img_info_items[key]))
    print "}"
