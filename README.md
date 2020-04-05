# Print-js | version -0.0.1 beta ⌨️
> Cool little things and decorating text output to the console :)  

Developer: Fuka  
Contact: [@FukaChanYT](https://t.me/FukaChanYT) or [@RightDie](https://t.me/RightDie)  

## Install
```
$ npm install https://github.com/FukaYouTube/print-js.git
$ npm start
```
OR
```
$ git clone https://github.com/FukaYouTube/print-js.git
$ npm install
$ npm start
```

## Get started ☁︎

Save Log file to path
```javascript
// test/test.js

const Logger = require('print-js') // Logger file

// Save the log file to this path
// When calling functions, we can pass the settings as a file should be saved
Logger.Logger('test/', 'logger', 'txt') // saved to path: (/Users/user/Projects/test/logger.txt)
Logger.Logger('test/', 'logger') // saved to path: (/Users/user/Projects/test/logger.json)
Logger.Logger('test/') // saved to path: (/Users/user/Projects/test/log.json)

// Or save the default file to the project root
Logger.Logger() // saved to path: (/Users/user/Projects/log.json)
```

Print.js - console
```javascript
// Use Print() to output text with colot.
const Print = require('print-js')
const print = new Print.Print()

print.log('Cool color huh?')
// Output: [print-js::log] Cool color huh? (color: green)
```
```javascript
// Use options
const print = new Print.Print({
    name: 'Test', // name projects, input to console [name::log]
    saveTo: 'test/', // save to path
    nameFile: 'testlog', // name file
    typeFile: 'txt' // type file [json (default), txt, log ... and more]
})

print.log('I don’t know if it’s clear at all, I myself didn’t understand :D')
// Output: [Test::log] I don’t know if it’s clear at all, I myself didn’t understand :D (color: green)

print.warn('Wow warning!')
// Output: [Test::log] Wow warning! (color: yellow)

print.error('Code error again, probably I forgot ";"')
// Output: [Test::log] Code error again, probably I forgot ";" (color: red)

print.custom('Custom theme :)', 'cyan')
// Output: [Test::log] Custom theme :) (color: cyan)
```
![images](/md-img/console.png "Console colors")

Spinner.js - loading to console
```javascript
// Spinner loader
const Spinner = require('../')
const spinner = new Spinner.Spin()

spinner.spin('dots', 'Loading..') // type loader, text

setTimeout(() => {
    spinner.stop()
}, 2000)
```
## Type loader:
dots, dots2, dots3, dots4, dots5, dots6, dots7, dots8, dots9, dots10, dots11,  
line, simpleDots, simpleDotsScrolling, boxBounce, boxBounce2, triangle,  
circle, squareCorners, circleQuarters, toggle, toggle1, toggle2, toggle3,  
toggle4, toggle5, toggle6, arrow, bouncingBar, bouncingBall, pong, christmas, layer

![images](/md-img/loader.png "Loading type")