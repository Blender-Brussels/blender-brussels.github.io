---
layout: post
title: Blender Lookback
description: "An inspiration or a parody of Facebook Lookback done in Blender"
modified: 
category: articles
tags: [workshop, Variable]
image:
  feature:
  credit: 
  creditlink: 
comments: false
share: true
---

The subject of the workshop was "Blender lookback" as inspired or parody of the (in)famous"Facebook lookback". The idea was to work on a series of scripts to automate the creation of movies based on images and videos taken from a folder. Ideally, by changing the content of the folder and re-running
the scripts, we would obtain a "different" movie.

The theme was suggested by Sophie, who hosts a radio show on [Radio Campus](http://www.radiocampus.be). She wants to automate the creation of gifs for each of her readio show based on a folder containing videos and a series of still pictures she draws.

During the workshop, a special python script was cooked and would follow those simple steps:
  # load a video file and scale it (keeping the aspect ratio)
  # load a list of images into the sequencer
  # use them as a mask on a plain color layer
  # launch the video rendering (here configured as a TIFF sequence) 

The series of tiff images was then converted into a .gif with imagemagick.

![Blender lookback]({{site.url}}/images/blender-lookback.gif)

All blend files are available [here](https://github.com/Blender-Brussels/bpy-bge-library/tree/master/users/frankiezafe/videoediting).

This event was hosted at [Variable, 80 rue Gallait − Schaerbeek](https://www.openstreetmap.org/way/60317745#map=19/50.86677/4.36900) starting at 10:00 and finishing at 18:00.
