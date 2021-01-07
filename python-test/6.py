#! /usr/bin/python3
from PIL import Image
import sys
im = Image.open('./baidu.png')

im.thumbnail((100,100))
im.save('./baidu1.png', 'PNG')
sys.stdout.write('./baidu1.png ^_^')

