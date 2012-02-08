---

title: Varry var var
type: regular
tags: JavaScript, js, John Schulz
format: markdown
generator: Tumblr Gem

layout: default

---

[John Schulz](http://twitter.com/jfsiii) turned me on to the code style of using `var` for every variable. This goes against most other code styles (see [learn.jquery.com](http://stage.learn.jquery.com/performance/variable-definition/) and [Idiomatic JavaScript](https://github.com/rwldrn/idiomatic.js#spacing)), which advise using one `var`, and listing following variables with commas.

    // typically recommend
    var firstName = 'Ryan',
        lastName = 'Gosling',
        age = 31,
        isAlive = true;
    
    // multiple vars
    var firstName = 'Ryan';
    var lastName = 'Gosling';
    var age = 31;
    var isAlive = true;

At first I gawked at this style, but after using it for two months, I'm sticking with it. Using multiple `var`s have a couple benefits:

+ Easier to add more variables, no need to change any trailing comma or semi-colon.
+ Eliminates unnecessary git commit diffs, where a line has changed only because you changed a trailing semi-colon or comma.
+ Easier to read (IMO). `var` is a reserved keyword, so it jumps out when syntax highlighted.
+ Eliminates awkward tab spacing underneath the var. It only lines up if your tabs are 4 spaces wide.
+ (Per JFSIII) Helps collaboration, other devs might miss the change of semi-colon and accidentally add a global variable.

If you're worried about bloating your code with all the superfluous `var`s, that should be taken care of when using a proper minifier.
