---

title: GitHub link to source code with commit tree
type: regular
tags: GitHub
format: markdown
generator: Tumblr Gem

layout: default

---

When referencing source code in a GitHub project, it's nice to be able to link to specific lines of a source file. GitHub makes this easy enough. From the main project page ([github.com/jquery/jquery](https://github.com/jquery/jquery)), you can browse to a specific file ([github.com/jquery/jquery/blob/master/src/css.js](https://github.com/jquery/jquery/blob/master/src/css.js)) and then click on line numbers to highlight a line, which also sets the URL anchor ([blob/master/srs/css.js#L171](https://github.com/jquery/jquery/blob/master/src/css.js#L171)), and Shift+Click to highlight multiple lines ([blob/master/srs/css.js#L171-185](https://github.com/jquery/jquery/blob/master/src/css.js#L171-185)).

The only problem is that source files are subject to change, or even be removed, so there's no guarantee that your link will always point to the correct place. By default, GitHub project pages link to the most current version of the source. A better practice is to link to _a specific commit_, where the content of source files are not subject to versioning.

To view a GitHub project at a certain commit, click on the **tree** link in the commit header, or just press `t` on your keyboard. You can then browse the project files, and link to sources of this commit, i.e. [github.com/jquery/jquery/blob/27291ff06ddb655f90a8d1eada71f7ac61499b12/src/css.js#L171-185](https://github.com/jquery/jquery/blob/27291ff06ddb655f90a8d1eada71f7ac61499b12/src/css.js#L171-185). Note that the only difference in the URL is changing the branch name `master` with the commit SHA.

+1 tip from [Paul Irish](https://twitter.com/#!/paul_irish/status/98100972684967936): 

> plus you only need 4 characters of the SHA in the URL.. it figures it out. i usually truncate to 7ish characters.

Nice: [github.com/jquery/jquery/blob/27291ff/src/css.js#L171-185](https://github.com/jquery/jquery/blob/27291ff/src/css.js#L171-185)