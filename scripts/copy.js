const fs = require('fs-extra')
const config = require('./config')

if (!fs.existsSync(config.dist)) {
  fs.mkdirSync(config.dist);
}

fs.copy(config.dist, `${config.library.dist}/assets`, (err) => {
  console.log('Copying assets to library...')

  if (err) {
    return console.error(err)
  }

  console.log(`[SUCCESS] ${config.library.dist}/assets`)
})
