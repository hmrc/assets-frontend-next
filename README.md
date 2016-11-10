# Assets Frontend Next

A proof of concept for the future direction of HMRC's [assets-frontend](https://github.com/hmrc/assets-frontend)


## Structure

```
.
├── design-pattern-library/
│   ├── assets/
│   │   ├── javascripts/
│   │   │   └── application.min.js
│   │   └── stylesheets/
│   │       ├── application-ie.min.css
│   │       ├── application-ie7.min.css
│   │       └── application.min.css
│   ├── components/
│   │   └── input-number.html
│   ├── design-patterns/
│   │   └── date-of-birth.html
│   └── index.html
├── dist/
│   ├── javascripts/
│   │   └── application.min.js
│   └── stylesheets/
│       ├── application-ie.min.css
│       ├── application-ie7.min.css
│       └── application.min.css
├── src/
│   ├── common/
│   │   ├── javascript/
│   │   │   └── formValidation.js
│   │   └── stylesheets/
│   │       ├── _colours.scss
│   │       ├── _input.scss
│   │       ├── _normalize.scss
│   │       ├── _typography.scss
│   │       └── _vars.scss
│   ├── components/
│   │   └── input-number/
│   │       ├── _input-number.scss
│   │       └── input-number.html
│   ├── design-patterns/
│   │   ├── date-of-birth/
│   │   │   ├── _date-of-birth.scss
│   │   │   ├── date-of-birth.html
│   │   │   ├── date-of-birth.js
│   │   │   └── package.json
│   │   └── _all.scss
│   ├── _application-base.scss
│   ├── application-ie.scss
│   ├── application-ie7.scss
│   ├── application.js
│   └── application.scss
├── LICENSE
├── README.md
├── library-template.html
└── package.json
```

* **design-pattern-library** - This is the generated output of all the components and design pattern partials found in `src`. It's managed by an `npm` build task, can be viewed in a browser, and deployed as a static site to GitHub Pages.
	* **assets** - This directory mirrors the **dist** directory.
* **dist** - Generated JS and CSS ready to be deployed to production.
* **src** - The source files for HMRC frontend assets.
	* **common** - Shared JS and CSS for components and design-patterns.
	* **components** - The building blocks for design-patterns. These consist of at least a view and a stylesheet and may optionally contain a javascript file.
	* **design-patterns** - Reusable collections of components for commonly used parts of pages. These also consist of at least a view and a stylesheet and may optionally contain a javascript file.
* **library-template.html** - This is the template file that the design-pattern-library will be generated from.


## License

This code is open source software licensed under the Apache 2.0 License.
