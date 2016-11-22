const fs = require('fs-extra')
const path = require('path')
const browserify = require('browserify')
const config = require('./config').scripts

console.log('Compiling scripts...')

const b = browserify(config.src)
const filename = config.dest + '/' + path.basename(config.src)

fs.outputFile(filename, '', (err, data) => {
  if(err) {
    console.log(`[ERROR] ${filename} not created`)
    console.log(err)
  }

  const outFile = fs.createWriteStream(filename)
  b.bundle().pipe(outFile)

  console.log(`[SUCCESS] ${filename}`)
})
