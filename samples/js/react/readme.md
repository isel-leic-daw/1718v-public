# Introduction to React #

Create a project folder, do `npm init` and configure a Webpack and Babel based build environment.

Do `npm install babel-preset-react --save-dev`to add the Babel support for JSX.

Add `react` to the babel configuration inside the Webpack configuration

```
(...)
use: {
  loader: 'babel-loader',
  options: {
    presets: ['env', 'react']
  }
}
(...)
```

On the `index.html` file, add the following `div` somewhere inside the `body`

```html
<div id='root' />
```

This defines the HTML container element where React will render its elements.

Define the following content on the `index.js` file.

```js
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
  React.createElement('h1', {}, 'Hello World'),
  document.getElementById('root')
)
```

This does the following:
* imports `React` and `ReactDOM` NPM modules. The first contains the DOM independent React supports, which is also used on React Native to build Android and iOS applications. The second contains the DOM specific functionality needed when using React on a browser.

* Calls the `ReactDOM.render` function passing in a _react element_ and the DOM element where to add the react managed elements.

* The _react element_ is created via the `React.createElement`. In this case it describes a `h1` HTML element with no attributes (the empty object passed as the second parameter) and with the `'Hello World'` child text.

Run the project and observe the result.
