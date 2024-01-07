Measurements_Front-End
==========
A frontend application for my portfolio.

The Back-End is in [Measurements_Back-End][Back-End]

Table of Contents
-----------------

  * [Requirements](#requirements)
  * [Usage](#usage)
  * [License](#license)


Requirements
------------

This front-end app requires the following to run:

  * [Node.js][node] 21.4.0 # TODO udpate to proper version of node required
  * [npm][npm] (normally comes with Node.js)


Usage
-----
When is installed  [npm][npm]:

```sh
npm i
```

```sh
npm start
```

License
-------

Measurements_Front-End is licensed under the [MIT](#) license.
Copyright &copy; 2023, Emmanuel Barrientos


[Back-End]:https://github.com/emanuel-bg/Measurements_Back-End
[node]: https://nodejs.org/
[npm]: https://www.npmjs.com/
[shield-node]: https://img.shields.io/badge/node.js%20support-0.10–5-brightgreen.svg
[shield-npm]: https://img.shields.io/badge/npm-v3.2.0-blue.svg
[shield-build]: https://img.shields.io/badge/build-passing-brightgreen.svg

# TODO

- [ ] Fix vulnerabilities displayed when `npm install`
  - 9 vulnerabilities (3 moderate, 6 high) DONE
- [ ] Add .env.example with required env variables without real value
- [ ] Fix eslint warnings ( displayed on npm start)
- [ ] Remove unncessary files like a.png and logo.svg and any non used file.
- [ ] Format code, there are several files without proper formatting. It will help with readability of the code.
- [ ] Consider renaming API to api, it is easier to type.
- [ ] Change any Spanish comments to English comments
- [ ] Remove debugger and console.log, it should be used only on development.
  - In production we should use external service like Sentry for error logs.
