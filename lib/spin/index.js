const fs = require('fs')
const path = require('path')

const colors = require('../print/colors')
const jsonSpinners = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'spinner.json')).toString())

// if the loading is completed, then change the value to true or default false
let isLoading = false

class LoadingSpinners {
    spin(type, message){
        console.clear()

        let spinner = jsonSpinners[type]
        let spinnerFrames = spinner.frames
        let spinnerInterval = spinner.interval
        let index = 0

        this.loader = setInterval(() => {
            process.stdout.write(colors.dim + '\r' + `${spinnerFrames[index++]} ${message}` + colors.reset)
            index = index % spinnerFrames.length

            if(isLoading){
                process.stdout.write(colors.blue + '\r' + `✔︎ ${message}` + colors.reset)
                clearInterval(this.loader)
            }
        }, spinnerInterval)

        return this.loader
    }

    stop(){
        isLoading = true
    }
}

module.exports = LoadingSpinners