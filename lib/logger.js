const path = require('path')
const bunyan = require('bunyan')

function log(saveTo, nameFile, typeFile){
    try {
        return bunyan.createLogger({
            name: 'app',
            streams: [{
                level: 'info',
                path: path.resolve(saveTo || '', `${nameFile || 'log'}.${typeFile || 'json'}`)
            }]
        })
    }catch(error){
        throw new Error('wrong path', error)
    }
}

module.exports = log