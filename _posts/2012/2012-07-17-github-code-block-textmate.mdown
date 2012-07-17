---

title: GitHub code blocks in TextMate
type: regular
tags: Markdown, TextMate, syntax highlighting
format: markdown
generator: Tumblr Gem

layout: default

---

[GitHub README's feature nice syntax highlighted code blocks](https://github.com/blog/832-rolling-out-the-redcarpet) with the triple tick notation.

    ``` css
    body { font-family: sans-serif; }
    ```

But as this syntax is a part of [GitHub Flavored Markdown](http://github.github.com/github-flavored-markdown/) and not the vanilla Markdown variety, TextMate does not recognize triple ticked code blocks, which can lead to ugly sections of the document. Take this example from [desandro/textmate-bundle/README.mdown](https://github.com/desandro/textmate-bundles/blob/master/README.mdown)

![README with Redcarpet code block](http://i.imgur.com/8ykWk.png)

I resolved this by modifying TextMate's Markdown Language Grammer, adding in the triple tick pattern for `raw_block`.

    raw_block = {
      patterns = (
        { begin = '(^|\G)([ ]{4}|\t)';
          name = 'markup.raw.block.markdown';
          while = '(^|\G)([ ]{4}|\t)';
        },
        { begin = '(^|\G)```';
          end = '(^|\G)```';
          name = 'markup.raw.block.markdown';
        },
      );
    };

Bingo.

![README with Redcarpet code block syntax highlighted](http://i.imgur.com/RWAGz.png)
