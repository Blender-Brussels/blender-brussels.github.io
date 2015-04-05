Blender-Brussels
================

![Blender-Brussels logo](https://raw.githubusercontent.com/Blender-Brussels/blender-brussels.github.io/master/images/blender-brussels-logo.png)

The **Blender-Brussels** − also known as **Blender BPY/BGE workshops** or **#bpybgebxl** − are a series of monthly work sessions organized by [Julien Deswaef](http://xuv.be) (@xuv) and [François Zajéga](http://frankiezafe.org) (@frankiezafe) with the aim of providing a regular gathering and knowledge sharing space for artists and developpers interested in Python scripting in the context of [Blender](http://blender.org).

This is the repository for jekyll files necessary to build the website of [Blender-Brussels](http://blender-brussels.github.io)

How to announce a new workshop
------------------------------

Create a new html document under the _post/ folder. If you plan to write in english, use the en/ subfolder, fr/ for french. The best way to start is by copying an existing articel and change the relevant content.

After you've tested your page (see below), commit your changes and push back on this server.

Don't forget to also announce it on the [mailing list](http://lurk.org/groups/blender-brussels/), the [BBUg forums](http://bbug.tuxfamily.org), Twitter, Facebook or any other place you see fit.   


How to edit the website
-----------------------

If you plan to make big changes to this website, you better have Jekyll installed locally, so you don't waist time pushing every change to Github or break the actual site.

Steps to install Jekyll on a debian flavored system:

`
sudo apt-get install ruby ruby-dev
sudo gem install jekyll
sudo gem install jekyll-mentions
`

`jekyll-mentions` is a plugin used to display github usernames as links. Not really necessary, but activated on this website.

How to run it locally while editing the pages:  
`jekyll serve -w --config _config.local.yml`

When you're done, push it back to Github for publishing changes to the world.

Note that Blender-Brussels communication is mainly done in english. But some articles are translated to french. 
The multi-lingual configuration has been inspired by [Sylvain Durand](http://sylvaindurand.org/making-jekyll-multilingual/).

