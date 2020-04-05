const colors = require('./colors')
const { red, yellow, green, reset } = colors

const logger = require('../logger')

class Print{
    constructor(options){
        this.options = options
    }
    
    log(message){
        if(this.options){
            let msg = `[${this.options.name || 'print-js'}::log] ${message}`
            console.log(green + msg + reset)

            logger(this.options.saveTo, this.options.nameFile, this.options.typeFile).info(msg)
        }else{
            let msg = `[print-js::log] ${message}`
            console.log(green + msg + reset)

            logger().info(msg)
        }
    }
    warn(message){
        if(this.options){
            let msg = `[${this.options.name || 'print-js'}::log] ${message}`
            console.log(yellow + msg + reset)

            logger(this.options.saveTo, this.options.nameFile, this.options.typeFile).info(msg)
        }else{
            let msg = `[print-js::log] ${message}`
            console.log(yellow + msg + reset)

            logger().info(msg)
        }
    }
    error(message){
        if(this.options){
            let msg = `[${this.options.name || 'print-js'}::log] ${message}`
            console.log(red + msg + reset)

            logger(this.options.saveTo, this.options.nameFile, this.options.typeFile).info(msg)
        }else{
            let msg = `[print-js::log] ${message}`
            console.log(red + msg + reset)

            logger().info(msg)
        }
    }
    custom(message, color){
        if(this.options){
            let msg = `[${this.options.name || 'print-js'}::log] ${message}`
            console.log(colors[color] + msg + reset)

            logger(this.options.saveTo, this.options.nameFile, this.options.typeFile).info(msg)
        }else{
            let msg = `[print-js::log] ${message}`
            console.log(colors[color] + msg + reset)

            logger().info(msg)
        }
    }
}

module.exports = Print