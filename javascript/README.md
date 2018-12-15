# Identiface - CITYCoP game ([DEMO](http://prod3.imt.hig.no/game))

## Note

This is an "older" codebase and instructions. See "elm" folder for an updated newer re-write of the system.


## Install

Upload the files to a server. Host to a primary domain (or use .htaccess/mod_rewrite from an Apache server to redirect from a subfolder).

## To-do list

* Preload images and graphics (while showing a game loading screen maybe?) to minimize in-game pages' loading time. 
* Evaluate graphics/fonts/colors.
* Random success and hint messages from arrays.


---------------------
## Prerequisites

Install nvm:
https://github.com/creationix/nvm

```
$ nvm install 5.10
$ nvm ls
  v0.10.36
  -> v5.10.1
  system
$ nvm alias default 5.10.1
```

```
npm install -g bower grunt
```


## Setup

```
npm install
bower install
```

If bower asks for angular version: `^1.5.5`

## Run

Compile and start development server in one step:

```
grunt build && npm start
```
uisng PM2 to manage the node instance running as a deamon





