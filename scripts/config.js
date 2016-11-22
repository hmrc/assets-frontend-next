const src = "src"
const dest = "dist"
const patternLib = "design-pattern-library"

module.exports = {
  src,
  dest,

  clean: [
    dest,
    patternLib
  ],

  library: {
    src: `${src}/**/*.html`,
    dest: patternLib,
    layout: 'library-template.html'
  },

  styles: {
    src: `${src}/!(_)*.scss`,
    dest: `${dest}/stylesheets`,
    includePaths: [
      'node_modules/govuk_frontend_toolkit/stylesheets',
      'node_modules/govuk-elements-sass/public/sass'
    ]
  }
}
