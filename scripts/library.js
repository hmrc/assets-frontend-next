const fs = require('fs')
const path = require('path')
const glob = require("glob")
const mkdirp = require('mkdirp')
const nunjucks = require('nunjucks')
const config = require('./config').library

const renderTemplate = (template, layout) => {
  const fileName = path.basename(template, '.html')
  const macro = fileName.replace(/-([a-z])/g, (g) => g[1].toUpperCase())

  const renderString = `
    {% extends "${layout}" %}
    {% import "${template}" as template %}
    {% block pattern %}
    {{ template.${macro}() }}
    {% endblock %}
  `
  return nunjucks.renderString(renderString)
}

const writeTemplate = (filepath, content) => {
  const fullPath = path.join(config.dest, filepath)

  fs.access(fullPath, (err) => {

    if(err) {
      mkdirp.sync(path.dirname(err.path))
    }

    fs.writeFile(fullPath, content, (err) => {
      if(err) {
        return console.log(err)
      }

      const patternName = path.basename(fullPath, '.html')
      console.log(`[SUCCESS] ${filepath}`)
    })
  })
}

glob(config.src, (err, files) => {
  console.log('Generating design patterns...')

  if(err) {
    return console.log(err)
  }

  const menuItems = files.map((file) => {
    const filename = path.basename(file)
    const dirName = file.split('/')[1]
    const tmpl = renderTemplate(file, config.layout)

    writeTemplate(`${dirName}/${filename}`, tmpl)

    return {
      url: `${dirName}/${filename}`,
      title: path.basename(filename, '.html')
    }
  })

  const index = nunjucks.render(config.layout, { menu: menuItems })
  writeTemplate('index.html', index)
})
