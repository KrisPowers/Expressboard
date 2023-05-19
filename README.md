
# In development. Not considered stable enough for professional useage.

Fast, minimal, user-friendly dashboard built with express for express servers. Expressboard provides a wide verity of features to track Site Analytics, Request Limitations, & More.

------

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 0.10 or higher is required.

If this is a brand new project, make sure to create a `package.json` first with
the [`npm init` command](https://docs.npmjs.com/creating-a-package-json-file).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```console
$ npm install expressboard
```

```js

const board = require('expressboard');

board.go(5100);

```

## Examples of Expressboard's useage

### Index.js
```js
// Express
const express = require('express')
const app = express()

// Expressboard
const board = require('expressboard');

app.get('/', function (req, res) {

  res.send('Hello World')
  board.onEvent('siteRequest')

})

app.listen(3000)
board.go(5100);
```

### Terminal
```console
$ node index.js
```

### Output
```console
[EXPRESS DASHBOARD]
View dashboard at: http://localhost:5100/dashboard
```

## Want to contribute?
The Expressboard project welcomes all constructive contributions. Contributions take many forms, from code for bug fixes and enhancements, to additions and fixes to documentation, additional tests, triaging incoming pull requests and issues, and more!

### Security Issues
If you discover a security vulnerability in Expressboard, please get in contact with [Kris Powers](https://github.com/KrisPowers).

## License
[MIT](https://github.com/KrisPowers/expressboard/blob/HEAD/LICENSE)