# SaferActive [![Deploy to github pages](https://github.com/saferactive/tgve/actions/workflows/gh-pages.yml/badge.svg)](https://github.com/saferactive/tgve/actions/workflows/gh-pages.yml)

This repository is made up of a Create React App (a front end application) which uses Turing Geovisualization Engine (TGVE) to visualize mainly Killed or Seriously Injured analysis outputs from SaferActive. To see the application live, visit [GH Pages](https://saferactive.github.io/tgve) to see it.

To host the data and make the repo self-sustained two sets of datasets have been added in, so if you want to clone this repo just remember that. These are:

1. Local Authorty Level datasets:
* `ksi.csv` (18K) please see SaferActive project for details about this output. 
* `las-only-code.geojson` (1.2M) England's Local Authority and District geographies in `.geojson` format.

2. Police Force Level datasets:
* `ksi-pf.csv` (2.3K) please see SaferActive project for details about this output. 
* `las-only-code.geojson` (310K) England and Wales' Police Force geographies in `.geojson` format.

Both sets of datasets are available in the repository's first [release](https://github.com/saferactive/tgve/releases/tag/0.1.0) too.

<img width="100%" alt="ksi on UK LAD geography" src="https://user-images.githubusercontent.com/408568/130941747-afc08dc9-b078-49ea-b2b5-bb38dda02cd8.png">

## notes