#!/bin/bash

# creates a new post by copying from a template

echo "Creating new post"

# get template
echo "Enter template [ regular.mdown, link.txt, photo.txt, quote.mdown ]: "
read TEMPLATE
read -p "Enter slug, i.e. my-post-slug: " SLUG

# get file extension http://unix.stackexchange.com/questions/1571/bash-get-file-extension
COPY_FILE=_posts/$TEMPLATE
COPY_FILE_NAME=$(basename $COPY_FILE)
COPY_FILE_EXT=${COPY_FILE_NAME##*.}

# create file
POST_FILE=_posts/$(date "+%Y/%Y-%m-%d")-$SLUG.$COPY_FILE_EXT

# echo new post:
echo $POST_FILE | pbcopy
cp $COPY_FILE $POST_FILE
# open it
mate $POST_FILE