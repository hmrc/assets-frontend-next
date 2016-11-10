const del = require('del')
const config = require('./config')

del(config.clean).then((paths) => {
  console.log('Deleting files and folders...\n', paths.join('\n'));
});
