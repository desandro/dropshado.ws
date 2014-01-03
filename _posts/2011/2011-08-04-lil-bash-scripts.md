---

title: Li'l bash scripts
type: regular
tags: bash
format: markdown
generator: Tumblr Gem

layout: default

---

After coming across [Modernizr's compress bash script](https://github.com/Modernizr/Modernizr/blob/5900d26b62ce7632af721cfa4c58196c0af1f34e/compress.sh), I've been adding my own li'l bash scripts here and there in my projects. They help automate any repetitive task, or provide a shortcut for a bash command I don't want to remember.

## Development

Make a sweet bash script, like `helloworld.sh`:

    #!/bin/bash
    echo 'Hello world!'

[Make the script executable](http://tldp.org/LDP/abs/html/invoking.html) by changing the permissions:

    $ chmod 755 helloworld.sh

Run the script from the command line

    $ ./helloworld.sh
    # > Hello World

## Examples

[metafizzy.co / newpost.sh](https://github.com/metafizzy/metafizzy.co/blob/63f782c8ffa2eae6696/newpost.sh) and [dropshado.ws / newpost.sh](https://github.com/desandro/dropshado.ws/blob/1ec1b99678953b5d2f49a007a92188520c908178/newpost.sh): creates a new post from a template

    #!/bin/bash
    
    # creates a new post
    # format as _posts/YYYY/YYYY-MM-DD-filename.ext
    # usage:
    #   $ ./newpost.sh my-new-post-filename
    
    COPY_FILE=_posts/template.mdown
    # create file
    POST_FILE=_posts/$(date "+%Y/%Y-%m-%d")-$1.mdown
    
    echo new post: $POST_FILE
    cp $COPY_FILE $POST_FILE
    # open it
    mate $POST_FILE

[demo / deploy.sh](https://github.com/desandro/demo/blob/a7468d147f9efd1a150fbd530275c83fb4190539/deploy.sh) and [desandro / deploy.sh](): rsyncs project to remote server

    #!/bin/bash
    rsync -avz --exclude '.git' --exclude '*.sh' ./ $BERNA:~/www/demo

[neo-vision / build.sh](https://github.com/desandro/neo-vision/blob/d594bf72f5151933705a/build.sh): moves release files into sub directory, compresses JS, zips it all up

    #!/bin/bash
    
    BUILD_DIR='neo-vision'
    ZIP='neo-vision.zip'
    REMOVABLES=("build.sh" "prettify.js" "lang-css.js" "README.mdown" $ZIP)
    
    rm -rf $BUILD_DIR/
    mkdir $BUILD_DIR
    cp *.* $BUILD_DIR
    
    # minifies prettify js
    cat prettify.js lang-css.js | uglifyjs -nc > $BUILD_DIR/prettify.min.js
    
    for REMOVE in "${REMOVABLES[@]}"
    do
    	rm $BUILD_DIR/$REMOVE
    done
    
    zip -r -u $ZIP $BUILD_DIR
  