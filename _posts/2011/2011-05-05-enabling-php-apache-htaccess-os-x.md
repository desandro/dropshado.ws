---

title: Enabling PHP, Apache, &amp; .htaccess in Mac OS X
type: regular
tags: PHP, Apache, htaccess, OS X
format: markdown
generator: Tumblr Gem

layout: default

---

I'm trying out developing without MAMP, and relying on the frameworks that are built into OS X. Here's how I got Apache, PHP, and htaccess working:

+ [Install Apache/PHP/MySQL on Snow Leopard](http://maestric.com/doc/mac/apache_php_mysql_snow_leopard)
+ [Enabling .htaccess in OS X](http://clagnut.com/blog/350/)

Additionally, I changed the document root to point to my _projects_ folder.

Within _/etc/apache2/httdp.conf_ it can be changed in:

    DocumentRoot "/Users/username/projects/"

And then in _/etc/apache2/users/username.conf_

    <Directory "/Users/username/projects/">


