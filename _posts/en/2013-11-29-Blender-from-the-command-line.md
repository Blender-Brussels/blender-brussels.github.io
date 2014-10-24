---
layout: post
title: Blender from the command-line
description: "No Blender splash screen this time"
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

Program of the day, morning is for "Show and Tell" and afternoon is working on scripts.

François and David did a short presentation about the latest BlenderConf that they both attended. François mainly talked about what it felt like to present there and they both shared with us what they brought back in their Blender bag of tricks.

Later in the day, we explored Blender from the command-line. Apart from playing around with the many features available already, the idea was to find a way to extract data from a .blend file and expose it in a different way.

We finally came up with a script that extracts texts (python scripts), objects, scenes and images form a PACKED blend file.

Download the script [here](https://github.com/Blender-Brussels/bpy-bge-library/tree/master/scripts/bpy/extractor) and run it like this:

    blender [path/to/file.blend] --background --python [path/to/extractor.py]


This event was hosted at [Variable, 80 rue Gallait − Schaerbeek](https://www.openstreetmap.org/way/60317745#map=19/50.86677/4.36900) starting at 10:00 and finishing at 18:00.
