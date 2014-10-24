---
layout: post
title: Kinect and the game engine
description: "Hooking together a kinect with Melon, OSC and the Blender Game Engine"
modified: 
category: articles
tags: [workshop, Variable, kinect, OSC]
image:
  feature: 
  credit: 
  creditlink: 
comments: false
share: true
---

First, François came with a little .blend file he set up with a cube rotating randomly. We looked through the code, studied it and improved it by making it shorter and easier to duplicate. The file is available on our [shared github repository](https://github.com/Blender-Brussels/bpy-bge-library/tree/master/blend) and is called bge_cube_animation. The cube can be duplicated without changing the code so that all cubes will perform their own random animation.

The next project was to get the BGE to send and receive OSC messages. We looked through different python OSC libraries and studied the great example provided by [Labomedia](http://wiki.labomedia.org/index.php/OSCinBlender:_une_aide_pratique). We didn’t start studying OSC by chance. It’s a well known protocol for exchanging data between realtime visual or audio programs but it’s also what comes out of [Melon](http://sourceforge.net/projects/kinect-melon/) (a kinect based controller) that François has been working on at [Numediart](http://www.numediart.org/).

To get it all working together, the pyOSC library had to be updated a little to handle OSC messages that were not yet implemented. The new version of the code is available on [my gitorious fork](https://gitorious.org/~xuv/pyosc/pyosc) (pyOSC v0.3.7), waiting to be merged with the official one.

We then rushed to finish the workshop by recording a self satisfying video of François pushing blocks around using the Kinect -> Melon -> pyOSC -> BGE set up. The file is called [bge_cube_osc.blend](https://github.com/Blender-Brussels/bpy-bge-library/blob/master/users/frankiezafe/bge_cube_osc.blend) on our Github repo.

<iframe width="560" height="420" src="//www.youtube.com/embed/6CK0sks0lWw?rel=0" frameborder="0" allowfullscreen></iframe>

*This article was originally posted on [Julien's blog](http://p.xuv.be/blender-bpybge-brussels-workshop-4)*

This event was hosted at [Variable, 80 rue Gallait − Schaerbeek](https://www.openstreetmap.org/way/60317745#map=19/50.86677/4.36900) starting at 10:00 and finishing at 18:00.
