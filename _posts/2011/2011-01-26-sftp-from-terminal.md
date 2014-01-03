---
layout: default
type: regular
tags: terminal
format: markdown
title: SFTP from Terminal

---
I haven't figured out a sweet use-case for this, but hey, it's there.

    sftp user@mydomain.com
    # then enter password...
    
    # upload
    put remote-path [local-path]
    
    # download
    get remote-path [local-path]
    
    # get help
    help
