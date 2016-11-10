const src = "src"
const dest = "dest"
const patternLib = "design-pattern-library"

module.exports = {
  src: src,
  dest: dest,

  clean: [
    dest,
    patternLib
  ],

  library: {
    src: src + "/**/*.html",
    dest: patternLib,
    layout: 'library-template.html'
  }
}
