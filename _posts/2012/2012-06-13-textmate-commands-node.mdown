---

title: TextMate commands with node
type: regular
tags: node, Textmate
format: markdown
generator: Tumblr Gem

layout: default

---

[TextMate commands](http://manual.macromates.com/en/commands) are the scripts that run every time you do some special key command, for example, Ctrl + Shift + W to wrap text in an HTML tag. Commands aren't just baked-in magic, each one is an editable script. This allows you to write your own. This is awesome.

Personally, I'm not familiar with bash or Ruby, which means the code behind any command is just as good as a magic spell. But through the wonder of node, I'm able to develop my own TextMate commands that I actually comprehend.

I had a project where I had to add links to any reference of a U.S. state, a perfect use-case for a custom command.

    # before
    Pennsylvania and Rhode Island
    # after
    [Pennsylvania](../pennsylvania/) and [Rhode Island](../rhode-island/)

First check that node is in your $PATH. On my machine, I have in `~/.bash_profile`:
  
    PATH=$PATH:~/bin:~/.gem/ruby/1.8/bin:/usr/local/bin/node
    export PATH

To check it's in there, from Terminal:

    echo $PATH
    # /usr/bin:/bin: ... /usr/local/bin/node
    # /usr/local/bin/node or something similiar should appear in there

This will allow the script to be run in node. For this script, I am using [process.stdin](http://nodejs.org/api/process.html#process_process_stdin), which takes the selected in. Of course, node does this in chunks or something and there's a good reason for it, that [John](http://twitter/jfsiii) could elaborate on. But what I do know is that this works.

    #!/usr/bin/env node
    
    process.stdin.resume();
    
    var str = '';
    
    process.stdin.on( 'data', function ( chunk ) {
      str += chunk;
    });
    
    process.stdin.on( 'end', function () {
      // convert selected text to lowercase, then convert spaces to dashes
      var link = str.toLowerCase().replace( ' ', '-' );
      // format link
      var output = '[' + str + '](../' + link +'/)';
      process.stdout.write( output );
    });

My Bundle options for the command look something this:

![TextMate bundle options](http://i.imgur.com/S8MpM.png)

I hit Cmd + A around my selected text and it does the proper conversion. Nice! Now I can make TextMate commands at will.
