---
layout: default
type: regular
tags: Textmate
format: markdown
title: Textile missing block code syntax highlighting in TextMate

---
TextMate doesn't have block code syntax highlighting for some reason.  Here's what I added to the Textile language in the Bundle editor, right after the blockquote portion:

    {  name = 'markup.raw.textile';
      begin = '(^bc([<>=()]+)?)(\([^)]*\)|{[^}]*})*(\.)';
      end = '^$';
      captures = {
        1 = { name = 'entity.name.tag.raw.textile'; };
        3 = { name = 'entity.name.type.textile'; };
        4 = { name = 'entity.name.tag.raw.textile'; };
      };
      patterns = (
        {  include = '#inline'; },
        {  include = 'text.html.basic'; },
      );
    },