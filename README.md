# Assets Frontend Next

A proof of concept for the future direction of HMRC's [assets-frontend](https://github.com/hmrc/assets-frontend)

**IMPORTANT:** This repo is intended only as a reference and not for use in any projects or services. It will be deleted once we have started to align assets-frontend to this structure.

## Table of Contents

* [Requirements](#requirements)
* [Usage](#usage)
* [Structure](#structure)
* [Contributing](#contributing)
* [License](#license)


## Requirements

Assets Frontend Next requires the following to run:

* [Node.js](https://nodejs.org/) >= 4.5.5
* [npm](https://www.npmjs.com/) (normally comes with Node.js)


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


## Contributing

To contribute to Assets Frontend Next...

* Clone this repo
* Create a new branch and commit your changes to it
* Push your branch and open a pull request


## License

This code is open source software licensed under the Apache 2.0 License.
