---

title: 'Reinstall IE8 ievms'
tags: [ 'IE' ]

layout: default

id: '107687889727'
---

I use [ievms](https://github.com/xdissent/ievms/) to browser test Internet Explorer. Every couple of months, the IE8 VM expires (_This copy of Windows must be activated..._). The only solution is to [reinstall the VM](https://github.com/xdissent/ievms/issues/22#issuecomment-20616370). ievms maintainer xdissent also made [iectrl](http://xdissent.github.io/iectrl/), a command line tool to make stuff like this easier.

    iectrl reinstall 8

I tried removing `.ievms/` files, and re-installing via the [bash script](https://github.com/xdissent/ievms/#quickstart). No dice. `iectrl` is the way to go.
