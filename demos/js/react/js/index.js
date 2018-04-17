import React from 'react'
import ReactDOM from 'react-dom'

function example0 () {
  const tree = React.createElement('div', {}, 
    React.createElement('h2', {}, 'Example'),
    React.createElement('p', {}, 'Some paragraph'))

  ReactDOM.render(tree, document.getElementById('root'))
}

function example1 () {
  setInterval(update, 1000)
  function update () {
    const date = new Date()
    const seconds = date.getSeconds()
    const line = [...Array(seconds).keys()].map(i => React.createElement('span', {}, `(${i})`))
    const tree = React.createElement('div', {},
      React.createElement('h2', {}, 'Example'),
      React.createElement('p', {}, 'Some paragraph'),
      React.createElement('p', {}, date.toLocaleString()),
      React.createElement('div', {}, line)
    )
    ReactDOM.render(tree, document.getElementById('root'))
  }
}

example1()
