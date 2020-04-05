const Logger = require('../')

// Save the log file to this path
Logger.Logger('test/', 'logger', 'txt') // saved to path: (/Users/user/Projects/test/logger.txt)
Logger.Logger('test/', 'logger') // saved to path: (/Users/user/Projects/test/logger.json)
Logger.Logger('test/') // saved to path: (/Users/user/Projects/test/log.json)

// Or save the default file to the project root
Logger.Logger() // saved to path: (/Users/user/Projects/log.json)

// Use Print() to output text with colot.
const Print = require('../')
const print = new Print.Print()

print.log('Cool color huh?')
// Output: [print-js::log] Cool color huh? (color: green)

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

// Spinner loader
const Spinner = require('../')
const spinner = new Spinner.Spin()

spinner.spin('dots', 'Loading..')

setTimeout(() => {
    spinner.stop()
}, 2000)