const fs = require('fs')
const path = require('path')
const glob = require('glob')
const sass = require('node-sass')
const mkdirp = require('mkdirp')
const config = require('./config').styles

const writeStyles = (filepath, content) => {
  const fullPath = path.join(config.dest, filepath)

  fs.access(fullPath, (err) => {
    if(err) {
      mkdirp.sync(path.dirname(err.path))
    }

    fs.writeFile(fullPath, content, (err) => {
      if(err) {
        return console.log(err)
      }

      const patternName = path.basename(fullPath)
      console.log(`[SUCCESS] ${patternName}`)
    })
  })
}

glob(config.src, (err, files) => {
  console.log('Compiling styles...')

  if(err) {
    return console.log(err)
  }

  files.forEach((file) => {
    sass.render({
      file,
      includePaths: config.includePaths
    }, (err, result) => {
      if (err) {
        return console.log(err);
      }

      const fileName = path.basename(file, '.scss')
      writeStyles(`${fileName}.css`, result.css)
    })
  })
})
