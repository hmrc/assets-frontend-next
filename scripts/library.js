const fs = require('fs-extra')
const path = require('path')
const glob = require("glob")
const nunjucks = require('nunjucks')
const config = require('./config').library
const writeFile = require('./utils/writeFile')

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

glob(config.src, (err, files) => {
  console.log('Generating design patterns...')

  if(err) {
    return console.log(err)
  }

  const menuItems = files.map((file) => {
    const filename = path.basename(file)
    const dirName = file.split('/')[1]
    const tmpl = renderTemplate(file, config.layout)

    writeFile(`${config.dest}/${dirName}/${filename}`, tmpl)

    return {
      url: `${dirName}/${filename}`,
      title: path.basename(filename, '.html')
    }
  })

  const index = nunjucks.render(config.layout, { menu: menuItems })
  writeFile(`${config.dest}/index.html`, index)
})
