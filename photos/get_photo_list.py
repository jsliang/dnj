#!/usr/bin/python

"""

Retrieve paths to photos in the current working directory, and return a {path, width, height} dictionary of each photo.

Maximum thumbnail dimension is customizable.

"""

# maximum photo thumbnail dimension
max_thumb_dimension = 800

from PIL import Image
import hashlib
import json
import os


def get_img_list(path):
    img_list = []
    for dirPath, dirNames, fileNames in os.walk(path):
        for f in fileNames:
            file_path = os.path.join(dirPath, f)
            if os.path.isfile(file_path):
                img_list.append(file_path)
    return img_list


def get_thumbnail_name(path):
    [dir_file_path, ext] = path.rsplit(".")
    return "%s_thumb.%s" % (dir_file_path, ext)


def get_thumbnail_list(img_list, max_thumb_dimension):
    thumb_list = []
    for img_path in img_list:
        if "_thumb" in img_path:
            continue

        try:
            img = Image.open(img_path)
            (width, height) = img.size
            thumb_width = int(float(max_thumb_dimension) / height * width)

            thumb_path = get_thumbnail_name(img_path)
            thumb_size = (thumb_width, max_thumb_dimension)
            thumb = img.resize(thumb_size, Image.ANTIALIAS)
            thumb.save(thumb_path)

            thumb_list.append(thumb_path)
        except IOError:
            continue
    return thumb_list


def get_img_info_items(img_list):
    img_info_items = {}
    for img_path in img_list:
        try:
            img = Image.open(img_path)
        except IOError:
            continue

        (width, height) = img.size
        img_info = {"path": img_path,
                    "width": width,
                    "height": height}

        m = hashlib.md5()
        m.update("%(path)s %(width)s %(height)s" % img_info)
        img_id = "%03d_%s" % (len(img_info_items), m.hexdigest())
        img_info_item = {img_id: img_info}

        img_info_items.update(img_info_item)
    return img_info_items

img_list = get_img_list(os.path.abspath("."))
thumb_list = get_thumbnail_list(img_list, max_thumb_dimension)
img_info_items = get_img_info_items(thumb_list)

print "{"
for key in sorted(img_info_items.iterkeys()):
    print "'%s': %s," % (key, json.dumps(img_info_items[key]))
print "}".replace("},}", "}}")
