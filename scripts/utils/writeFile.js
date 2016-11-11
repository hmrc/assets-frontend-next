const fs = require('fs-extra')
const path = require('path')

const writeFile = (filepath, content) => {
  fs.access(filepath, (err) => {
    if(err) {
      fs.mkdirpSync(path.dirname(err.path))
    }

    fs.writeFile(filepath, content, (err) => {
      if(err) {
        return console.log(err)
      }

      const fileName = path.basename(filepath)
      console.log(`[SUCCESS] ${fileName}`)
    })
  })
}

module.exports = writeFile
