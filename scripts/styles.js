const fs = require('fs-extra')
const path = require('path')
const glob = require('glob')
const sass = require('node-sass')
const config = require('./config').styles
const writeFile = require('./utils/writeFile')

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
      writeFile(`${config.dist}/${fileName}.css`, result.css)
    })
  })
})
