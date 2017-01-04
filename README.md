# Assets Frontend Next

A proof of concept for the future direction of HMRC's [assets-frontend](https://github.com/hmrc/assets-frontend)

### IMPORTANT...

This repo is intended **only** for reference and not for use with any projects or services. It will be deleted once we have started to align [assets-frontend](https://github.com/hmrc/assets-frontend) to this structure.

## Table of Contents

* [Requirements](#requirements)
* [Usage](#usage)
* [Structure](#structure)
* [Benefits](#benefits)
* [Contributing](#contributing)
* [License](#license)


## Requirements

Assets Frontend Next requires the following to run:

* [Node.js](https://nodejs.org/) >= 4.5.5
* [npm](https://www.npmjs.com/) (normally comes with Node.js) >= 3.0.0


## Usage

### Local development

First clone this repo...

```sh
git clone https://github.com/hmrc/assets-frontend.git
```

Install its dependencies...

```sh
npm install
```

Then run the development tasks with...

```sh
npm start
```


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
│   │       ├── _normalize.scss
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


## Benefits

* All files and information (markup, styles, scripts, tests, documentation, etc.) are kept together for each design pattern or component which
	* Makes things easier to find, understand, and update
	* Provides a more consistent naming convention - everything is named after the directory
* Using [Nunjucks macros](https://mozilla.github.io/nunjucks/templating.html#macro) for design pattern and component templates 
	* Makes them extremely composable
	* Makes them easy to use in a prototype.
	* Makes it simple to transpile them into other templating languages
* Simple build tasks for compiling for various outputs (npm package, deployable production assets, pattern library, partials for play frontends, etc.) means this repo becomes a source of truth for all our design pattern code and their documentation rather than being a one-to-one representation of what gets deployed.

There are also [some slides here](https://docs.google.com/presentation/d/1xrbhC7zJC78Ca1ATPaCIH0adAb0onLlHEWNqIW_esMI) that give a comparison of this repo with the current state of our assets.

## Contributing

To contribute to Assets Frontend Next...

* Clone this repo
* Create a new branch and commit your changes to it
* Push your branch and open a pull request


## License

This code is open source software licensed under the Apache 2.0 License.
