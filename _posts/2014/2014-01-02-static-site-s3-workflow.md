---

title: Static site S3 workflow
tags: [ S3, deploy ]

layout: default

id: '72044078763'
---

After a snafu with my previous hosting company, I've been using [Amazon's static site service on S3](http://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html).

Site is built in `build/`. I've been using [Grunt](http://gruntjs.com/) mostly, but this would work just as well for Jekyll sites.

I use [s3cmd](http://s3tools.org/s3cmd) to transfer the files. Everything in `build/` gets uploaded.

    s3cmd sync build/. s3://masonry.desandro.com

This command is saved in a Makefile. See [masonry-docs/Makefile](https://github.com/desandro/masonry-docs/blob/master/Makefile).

    make deploy

So after set up, making a site takes one or two commands

    grunt
    make deploy

See this workflow in use:

+ [Masonry docs](http://github.com/desandro/masonry-docs)
+ [Isotope docs](https://github.com/metafizzy/isotope-docs)
+ [Draggabilly site](https://github.com/desandro/draggabilly/tree/site)

---

This workflow is especially straightforward. At one time I did try a git post-receive hook ([like one Nicolas Gallagher explains](http://nicolasgallagher.com/simple-git-deployment-strategy-for-static-sites/)), but this felt murky, _ssh_ing to a remote box, managing two git instances. Sticking with straight-up file transfering is dumb enough that I can understanding it. Adding a separate workflow for deployment on top of git seems like duplicated effort, but there's a benefit to separating these tasks. In my head, they're separate.
