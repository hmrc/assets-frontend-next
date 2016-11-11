const fs = require('fs-extra')
const config = require('./config').clean

console.log('Deleting files and folders...')

config.forEach((dir) => {
  fs.remove(dir, (err) => {
    if (err) {
      return console.log(err)
    }

    console.log(`[SUCCESS] ${dir}`)
  })
})
