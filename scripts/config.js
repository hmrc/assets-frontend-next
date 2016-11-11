const src = "src"
const dist = "dist"
const patternLib = "design-pattern-library"

module.exports = {
  src,
  dist,

  clean: [
    dist,
    patternLib
  ],

  library: {
    src: `${src}/**/*.html`,
    dist: patternLib,
    layout: 'library-template.html'
  },

  styles: {
    src: `${src}/!(_)*.scss`,
    dist: `${dist}/stylesheets`,
    includePaths: [
      'node_modules/govuk_frontend_toolkit/stylesheets',
      'node_modules/govuk-elements-sass/public/sass'
    ]
  }
}
