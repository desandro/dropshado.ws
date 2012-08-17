---

title: YAML Front Matter syntax highlighting in TextMate
tags: [ YAML, Markdown, TextMate, syntax highlighting, Jekyll ]
format: markdown

layout: default

---

_Aside:_ Right now I'm a train with spotty Wifi. Hence, lots of time for noodling rather than actual productivity.

If you like that [Jekyll](https://github.com/mojombo/jekyll) as much as I do, chances are you've got lots and lots of wonderful Markdown files loaded with [YAML Front Matter](https://github.com/mojombo/jekyll/wiki/YAML-Front-Matter). I use Jekyll for everything, lo, even this very post! Let's get TextMate's Markdown Language Grammer to properly highlight the YAML up top.

Crack open the Bundle Editor (Cmd + Opt + Ctrl + B) and select the Markdown Language Grammer. In TextMate 2, this is in  Markdown > Language Grammers > Markdown. You'll need to add two bits.

In the `block`, er, block, add `{ include = '#yaml_front_matter'; },` to the `patterns`:

    block = {
      patterns = (
        { include = '#yaml_front_matter'; },
        { include = '#separator'; },
        { include = '#heading'; },
        ...
      );

Then add the following pattern for `yaml_front_matter` under the `block` repository. I just added it after `separator` pattern.

    separator = {
      match = '(^|\G)[ ]{,3}([-*_])([ ]{,2}\2){2,}[ \t]*$\n?';
      name = 'meta.separator.markdown';
    };
    # add this next bit
    yaml_front_matter = {
      patterns = (
        { begin = '\G---';
          end = '^---';
          name = 'source.yaml.embedded.markdown';
          patterns = ( { include = 'source.yaml'; } );
        },
      );
    };

Boom. Now my Jekyll Markdown files look niiiiiiiiiice.

![YAML Front Matter](http://i.imgur.com/vyYAK.png)
