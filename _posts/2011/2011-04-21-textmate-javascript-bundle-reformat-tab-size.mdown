---

title: Changing TextMate JavaScript reformat tab size
type: regular
tags: TextMate, Ryan Stout
format: markdown
generator: Tumblr Gem

layout: default

---

TextMate has an beautify command built into its default JavaScript bundle &#x2303;&#x21E7;H (Ctrl+Shift+H). To change the tab size used by the beautifier:

1. Crack open the Bundle Editor. **Bundles** > **Bundle Editor** > **Show Bundle Editor** or **&#x2303;&#x2325;&#x2318;B** (Ctrl+Cmd+Opt++B)
2. Select **JavaScript** > **Reformat Document / Selection**
3. Add a second argument for the number of spaces to `js_beautify($input)`

For mine, with two space tabs, it looks like:

    print js_beautify($input,2);

If you want to hack the PHP script that makes it all happen, you'll find it in /Applications/TextMate.app/Contents/SharedSupport/Bundles/JavaScript.tmbundle/Support/lib/beautify.php

Thanks to help from [Ryan Stout](http://agileproductions.com).