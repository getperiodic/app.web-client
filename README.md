Periodic Web Client
========================================

Boilerplate web client

## Prerequisites
**You need to make sure you have nodemon and grunt installed globally first**

### Installing nodemon
    $ npm install nodemon -g
    $ npm install grunt-cli -g

## Starting App
Hop into the app directory (the app gets copied via a grunt task), install dependencies for the app, create a log directory, fire up the app.

    $ cd periodic/app.web-client
    $ npm install
    $ mkdir logs
    $ npm run webapp
    
## Developing
**You need to make sure you have browserify installed globally first**

### Installing browserify
    $ npm install browserify -g

### Starting app 
    $ cd periodic/app.web-client
    $ npm run appdev

### Start Developing app & JSLinting
watch for file changes for automated linting and browserify compliation, It's wise to run JSLinting while developing to catch errors on the fly

    $ cd periodic/app.web-client
    $ npm run watch