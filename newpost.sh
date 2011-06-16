#!/bin/bash

# creates a new post
# format as _posts/YYYY/YYYY-MM-DD-filename.ext
# usage
# $ sh newpost.sh my-new-post-filename _posts/regular.mdown

if [[ $2 ]]; then
	COPY_FILE=$2
else
	# default post template
	COPY_FILE=_posts/regular.mdown
fi
# get file extension http://unix.stackexchange.com/questions/1571/bash-get-file-extension
COPY_FILE_NAME=$(basename $COPY_FILE)
COPY_FILE_EXT=${COPY_FILE_NAME##*.}
# create file
POST_FILE=_posts/$(date "+%Y/%Y-%m-%d")-$1.$COPY_FILE_EXT

echo new post: $POST_FILE
cp $COPY_FILE $POST_FILE
# open it
$EDITOR $POST_FILE