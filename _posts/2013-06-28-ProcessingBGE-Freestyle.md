---
layout: post
title: ProcessingBGE and Freestyle
description: "Quick presentation of the ProcessingBGE project and hacking around Freestyle "
modified: 
category: articles
tags: [workshop, Variable, pBGE, Freestyle]
image:
  feature: 
  credit: 
  creditlink: 
comments: false
share: true
---

François did a presentation of his personnal poject called ProcessingBGE. It's a simplification of the Python BGE API for beginners to quickly start producing generative 3D in Blender. It is, as the name suggests, inspired by [Processing](http://processing.org), but only meant for easing python scripting in the Blender game engine.

Julien presented the [Freestyle](http://freestyle.sourceforge.net/), a non photo-realistic renderer capable of doing line drawings and other "cartoon-like" images. This seemed to interest the crowd present that day. 

So the whole workshop was spent tweaking existing python scripts to be able to output vector images instead of raster images with Freestyle. These scripts output SVG files and are available [here](https://github.com/Blender-Brussels/bpy-bge-library/tree/master/scripts/bpy/svgwriter).

We did not manage to do multiple render passes with a single script. This could be brought up in a future workshop.

Announcements and comments were posted [on the BBUG forum](http://bbug.tuxfamily.org/index.php?p=/discussion/47/2806-blender-bpybge-workshop-constant-variable).

This event was hosted at [Variable, 80 rue Gallait − Schaerbeek](https://www.openstreetmap.org/way/60317745#map=19/50.86677/4.36900) starting at 10:00 and finishing at 18:00.
