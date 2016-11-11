const fs = require('fs-extra')
const config = require('./config')

fs.copy(config.dest, `${config.library.dest}/assets`, (err) => {
  console.log('Copying assets to library...')

  if (err) {
    return console.error(err)
  }

  console.log(`[SUCCESS] ${config.library.dest}/assets`)
})
