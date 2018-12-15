# Identiface

Simple web-based face-matching game.

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

   # start your local webserver, eg. with http-server NPM installed:
   http-server .

   # if you have Python 2
   python -m SimpleHTTPServer <port>

   # if you have Python 3
   python3 -m http.server .
```


### Production build

```bash
   # compile the source for production
   elm make src/Main.elm --output elm.js --optimize

   # run uglifyjs twice to compress and mangle the functions
   uglifyjs elm.js --compress 'pure_funcs="F2,F3,F4,F5,F6,F7,F8,F9,A2,A3,A4,A5,A6,A7,A8,A9",pure_getters=true,keep_fargs=false,unsafe_comps=true,unsafe=true,passes=2' --output=elm.js && uglifyjs elm.js --mangle --output=elm.js
```

