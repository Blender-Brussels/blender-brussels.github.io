---
layout: post
title: Experimental mesh generation
description: "Studying the generative experimental-surface script by @inconvergent"
modified:
category: articles
tags: [workshop, F/LAT]
image:
  feature: inconvergent.net.png
  credit: Anders Hoff - CC-by 3.0
  creditlink: http://inconvergent.net
comments: false
share: true
---

**Results of the workshop**

*resume of the day*

We started the day by trying to run the project of [anders hoff](https://twitter.com/inconvergent). His project requires the python library [scipy](http://www.scipy.org/) to be properly installed. Because blender uses his own version of python, the library have to be copied in the blender folders. To do so, we tried the procedure explained in the last comment of this [discussion](http://blender.stackexchange.com/questions/5287/using-3rd-party-python-modules). Unfortunately, it didn't work out, due to a DLL not found issue on windows...

To avoid total frustration, we tried a more direct and low-level approach, based on a tiny sketch found in a [Shigeto Maeda pdf](http://download.blender.org/documentation/bc2013/shigeto_maeda_GMP_Supplement.pdf), on page 3.

![GShigeto Maeda procedure]({{site.url}}/images/shigeto_maeda_process.jpg)

It has the advantage of being feasable with built-in blender mesh methods.

The 3 main calls are:

	bpy.ops.mesh.extrude_region_move( TRANSFORM_OT_translate={ "value": ( normal.x * m, normal.y * m, normal.z * m ) } )
	bpy.ops.transform.resize( value=( 0.5, 0.5, 0.5 ), constraint_orientation='LOCAL' )
	bpy.ops.transform.rotate( value= -0.11 * j, axis=( normal.x, normal.y, normal.z ), constraint_orientation='LOCAL' )

where *normal* is a copy of the face normal.

The script we used is [available here](http://frankiezafe.org/fileadmin/sites/frankiezafe/labo/bpybge/generative/generative.py).

After palying with it a bit, we end up with these models, based on primitives such as cube and cylinder.

![Generative meshes examples]({{site.url}}/images/generative_meshes.jpg)

Thanks to [blend4web](https://www.blend4web.com/en/), you can see them in 3D:

+ [model 01](http://frankiezafe.org/fileadmin/sites/frankiezafe/labo/bpybge/generative/export/generative_01.html)
+ [model 02](http://frankiezafe.org/fileadmin/sites/frankiezafe/labo/bpybge/generative/export/generative_02.html)
+ [model 03](http://frankiezafe.org/fileadmin/sites/frankiezafe/labo/bpybge/generative/export/generative_03.html)
+ [model 04](http://frankiezafe.org/fileadmin/sites/frankiezafe/labo/bpybge/generative/export/generative_04.html)
+ [model 05](http://frankiezafe.org/fileadmin/sites/frankiezafe/labo/bpybge/generative/export/generative_05.html)
+ [model 06](http://frankiezafe.org/fileadmin/sites/frankiezafe/labo/bpybge/generative/export/generative_06.html)
+ [model 07](http://frankiezafe.org/fileadmin/sites/frankiezafe/labo/bpybge/generative/export/generative_07.html)

You can also download the [blender project including exports and python script here](http://frankiezafe.org/fileadmin/sites/frankiezafe/labo/bpybge/generative/generative.zip).


**This workshop is dedicated to exploring generative 3D and mesh modifications using Python scripting.**

For this, we won't start from scratch but will use the [experimental-surface](https://github.com/inconvergent/experimental-surface) script by **Anders Hoff** (@inconvergent) as an object that we will study during the day. 
For those with less python knowledge, we will just experiment by running the script as it is and try to come up with different forms and outcomes. 
For the more advanced Python users, we will take a deeper look at the script inner workings, get inspired by it and integrate some of its concepts into other mesh creation experiments.
  

**Sounds interesting to you?** Then please send a mail to juego (at) requiem4tv (dot) com to book a seat. 

The Blender-Brussels is a series of monthly free and open workshops dedicated to Python creative coding using Blender. 
Started by [François Zajéga](http://frankiezafe.org) and [Julien Deswaef](http://xuv.be) in 2012, these have become a regular meeting point for anyone interested in experimenting with code. It works as a communal space to exchange ideas and share knowledge as a way to learn. 
All results of these practices − exercises and documentation produced during the workshop − are shared online under an open source license.

This event is hosted at [F/LAT − 45, rue du Canal − 1000 Brussels](http://www.openstreetmap.org/#map=19/50.85476/4.34986&layers=N) on Saturday 28th February 2015, **starting at 10:00 and finishing at 18:00**.

<div style="clear: both;"></div>
This event is funded by:

<div style="width: 15%; margin: 0 2% 2% 0; text-align: center; float: left;"><a href="http://www.arts-numeriques.culture.be/"><img src="{{site.url}}/images/non-free/FWB_logo.svg" style="width: 100%;" alt="FWB"></a></div> 
[Digital Arts Commission of the Wallonia-Brussels Federation](http://www.arts-numeriques.culture.be/)

<div style="clear: both;"></div>
