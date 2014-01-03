---
layout: default
type: regular
tags: js, loops
format: markdown
title: While loops

---
`while` loops clean up basic loops.  Let's compare

Using a typical `for` loop:

    for (var i=0; i < maxNum; i++ ) { ...

And a `while` loop:

    var i = maxNum
    while ( i-- ) { ...

Only two statements and the logic inside the conditional is one statement. The downside to the `while` loop above is that it will iterate in a descending manner.  That is, if `maxNum` is 9, the loop will iterate from 9 down to 0, instead of 0 to 9. Of course, you could just as well do an ascending `while` loop, which looks like:

    var i = -1;
    while ( i++ < maxNum ) { ...

But this can be a bit obscure if you're not familiar with what's going on. Plus, it's just as long as the standard `for` loop.

See [Rebecca Murphey's documentation](http://jqfundamentals.com/book/book.html#N2034A) for more details.