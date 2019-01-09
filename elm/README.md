# Identiface

Simple web-based face-matching game.


# Internal game design

## General

System for evaluationg clossness for game and car game
Each image is named which whatever the upload is called
There is a mapping from the image to the features.
An image is given a code which represents features.
The mapping and code is in a text file next to the images
  
For faces you have invariant and variable feature. For the face and cars the invariants are listed first naming.  IDs matchign ensures the right answer

`ID.features.vfeatures.png`

Each digit represents the value on the axis.

Thus a `1341` will match a `1341` and `2341` will be similar by only just different
Easy levels have wrong answers as more than one feature changed

For cars there will be the same challenge.  A scene is presented and then you have to work out which of the cars was in the picture

I would also like to add a measure of how confident you are in your answer.  This gaming on confidence would be nice to add to the actual app.

Accurate levels of confidence is vital in recalling information.  Being sure and wrong would be a bad thing. After each selection you have to give how confident you are that the information is correct.

Paper written reports do not capture the confidence of the person speaking in the form.  A measure of confidence would be interesting to add to the app to have more informaiton about it

So when filling in the report the person could give an answer which was - I think it was X to pretty sure it was X, to certain it was X


## FACES & FILENAMES

‘a’ stands for “asked” (faces at the “Memorise” level)
‘c’ stands for “correct” (faces that are correct choices at the “Select” level)
‘w’ stands for “wrong” (faces that are wrong choices at the “Select” level)


### FUNCTIONALITY

- 1 of the 3 “a” is chosen randomly at the “Memorise” level
- 1 of the 3 “c” is chosen randomly at the “Select” level and gets 1 position out of 4
- 3 of the 9 “w” are chosen randomly at the “Select” level and get 3 positions out of 4



# Elm

## Prerequisites

   * Elm version 0.19.0 installed


## Installation instructions

   * Clone the repository.


## Building instructions

### Development build

```bash
   elm make src/Main.elm --output elm.js
   # to include debugger, do 
   elm make src/Main.elm --output elm.js --debug

   # start your local webserver, eg. with http-server NPM installed (npm install -g http-server):
   http-server .

   # if you have Python 2
   python -m SimpleHTTPServer <port>

   # if you have Python 3
   python3 -m http.server 8080
```


### Production build

```bash
   # compile the source for production
   elm make src/Main.elm --output elm.js --optimize

   # run uglifyjs twice to compress and mangle the functions
   uglifyjs elm.js --compress 'pure_funcs="F2,F3,F4,F5,F6,F7,F8,F9,A2,A3,A4,A5,A6,A7,A8,A9",pure_getters=true,keep_fargs=false,unsafe_comps=true,unsafe=true,passes=2' --output=elm.js && uglifyjs elm.js --mangle --output=elm.js
```

