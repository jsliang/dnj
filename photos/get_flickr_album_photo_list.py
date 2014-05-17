#!/usr/bin/python

"""

Retrieve links to photo thumbnails in a Flickr set, and return a {path, width, height} dictionary of each photo.

Album URL and maximum thumbnail dimension are both customizable.

"""

import hashlib
import json
import requests

# ============== #
# SETTINGS BEGIN #
# ============== #

# source set of photos
flickr_set_url = "https://www.flickr.com/photos/marce1231/sets/72157635208486461/"

# possible values of thumbnail_size:
#   u'Square', u'Large Square', u'Thumbnail', u'Small', u'Small 320',
#   u'Medium', u'Medium 640', u'Medium 800', u'Large', u'Original'
thumbnail_size = u'Medium 640'

# ============== #
# SETTINGS  END  #
# ============== #


# DO NOT MODIFY CODES BELOW  #

def get_setid_from_url(url):
    """
    Retrieve set_id from a Flickr set URL

    >>> get_setid_from_url("https://www.flickr.com/photos/marce1231/sets/72157635208486461/")
    72157635208486461

    >>> get_setid_from_url("https://www.flickr.com/")

    >>> get_setid_from_url("https://www.facebook.com/")
    """

    # trim last slash
    if url.endswith("/"):
        url = url[0:len(url) - 1]

    try:
        [__, userid_str, __, set_id_str] = url.rsplit("/", 3)

        # set_id_str shall be integers
        # if they aren't, most probably the URL is not in an expected format
        set_id = int(set_id_str)

        return set_id
    except ValueError:
        return None


def get_photoinfo(photo_id, thumbnail_size):
    """
    Retrieve path, width, height from a given photo_id and thumbnail_size

    >>> get_photoinfo(9581934291, u'Medium 640')
    {'path_large': u'https://farm3.staticflickr.com/2883/9581934291_78944dc642_o.jpg', 'path': u'https://farm3.staticflickr.com/2883/9581934291_b971006ca6_z.jpg', 'height': 427, 'width': 640}

    >>> get_photoinfo(9584721568, u'Original')
    {'path_large': u'https://farm8.staticflickr.com/7347/9584721568_74b5349ef8_o.jpg', 'path': u'https://farm8.staticflickr.com/7347/9584721568_74b5349ef8_o.jpg', 'height': 800, 'width': 1200}

    >>> get_photoinfo(12345678, u'Original')
    """

    photo_info_resp = requests.get(
        "https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=f8b2a0e42fe214cf12d23effccb67c72&photo_id=%d&format=json&nojsoncallback=1" % photo_id)
    photo_info = json.loads(photo_info_resp.text)

    photo_sizes = photo_info[u'sizes'][u'size']
    ret = None
    for size in photo_sizes:
        if size[u"label"] == thumbnail_size:
            path = size[u'source']
            width = int(size[u'width'])
            height = int(size[u'height'])

            img_info = {"path": path,
                        "width": width,
                        "height": height}
            if ret == None:
                ret = img_info
            else:
                ret.update(img_info)

        if size[u"label"] == u'Original':
            path_large = size[u'source']
            img_info = {"path_large": path_large}
            if ret == None:
                ret = img_info
            else:
                ret.update(img_info)

    return ret


def get_set_img_info_items(set_id, thumbnail_size):
    img_info_items = {}

    photo_set_resp = requests.get(
        "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=f8b2a0e42fe214cf12d23effccb67c72&photoset_id=%s&format=json&nojsoncallback=1" % set_id)
    photo_set = json.loads(photo_set_resp.text)
    photos = photo_set["photoset"]["photo"]

    for photoid in [int(x['id']) for x in photos]:
        img_info = get_photoinfo(photoid, thumbnail_size)

        if img_info != None:
            m = hashlib.md5()
            m.update("%(path)s %(width)s %(height)s" % img_info)
            img_id = "%03d_%s" % (len(img_info_items), m.hexdigest())
            img_info_item = {img_id: img_info}

            img_info_items.update(img_info_item)

    return img_info_items

if __name__ == "__main__":
    set_id = get_setid_from_url(flickr_set_url)
    img_info_items = get_set_img_info_items(set_id, thumbnail_size)

    json_str = "{"
    for key in sorted(img_info_items.iterkeys()):
        json_str += "'%s': %s," % (key, json.dumps(img_info_items[key]))
    json_str += "}"
    print json_str.replace("},}", "}}")
