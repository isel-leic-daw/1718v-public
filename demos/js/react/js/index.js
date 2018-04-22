import React from 'react'
import ReactDOM from 'react-dom'
import Clock from './ui/clock'
import App from './ui/app'

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

function example2 () {
  setInterval(update, 1000)

  function Line ({count}) {
    return React.createElement('div', {},
      [...Array(count).keys()].map(i => React.createElement('span', {}, `(${i})`)))
  }

  function update () {
    const date = new Date()
    const seconds = date.getSeconds()
    const tree = React.createElement('div', {},
      React.createElement('h2', {}, 'Example'),
      React.createElement('p', {}, 'Some paragraph'),
      React.createElement('p', {}, date.toLocaleString()),
      React.createElement(Line, {count: seconds}),
      React.createElement(Line, {count: seconds})
    )
    ReactDOM.render(tree, document.getElementById('root'))
  }
}

// JSX - extension to JS
function example3 () {
  setInterval(update, 1000)

  function Line ({count}) {
    return React.createElement('div', {},
      [...Array(count).keys()].map(i => React.createElement('span', {}, `(${i})`)))
  }

  function update () {
    const date = new Date()
    const seconds = date.getSeconds()
    const tree = <div>
      <h2>Example 3</h2>
      <p>Some paragraph</p>
      <p>{date.toLocaleString()}</p>
      <Line count={seconds} />
      <Line count={seconds} />
      <Line count={seconds} />
      <Line count={seconds} />
    </div>
    ReactDOM.render(tree, document.getElementById('root'))
  }
}

function example4 () {
  setInterval(update, 1000)

  function update () {
    const date = new Date()
    ReactDOM.render(<Clock date={date} />,
      document.getElementById('root'))
  }
}

function example5 () {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
}

example5()
