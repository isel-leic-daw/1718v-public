import React from 'react'
import ReactDOM from 'react-dom'

import Line from './ui/line'
import Clock from './ui/clock'
import ShowHide from './ui/ShowHide'
import App from './ui/App'

function demo0 () {
  const tree = React.createElement('div', {},
    React.createElement('h2', {}, 'Rendered by React'),
    React.createElement('p', {}, 'Some paragraph')
  )

  ReactDOM.render(tree, document.getElementById('root'))
}

function demo1 () {
  setInterval(tick, 1000)
  function tick () {
    const date = new Date()
    const seconds = date.getSeconds()
    const line = [...new Array(seconds).keys()].map(i => React.createElement('span', {}, ` (${i}) `))
    const tree = React.createElement('div', {},
      React.createElement('h2', {}, 'Clock'),
      React.createElement('p', {}, date.toLocaleString()),
      React.createElement('p', {}, line)
    )
    ReactDOM.render(tree, document.getElementById('root'))
  }
}

function demo2 () {
  setInterval(tick, 1000)
  function tick () {
    const date = new Date()
    const seconds = date.getSeconds()
    const tree = <div>
      <h2>Clock</h2>
      <p>{date.toLocaleString()}</p>
      <p><Line seconds={seconds} reverse /></p>
    </div>
    ReactDOM.render(tree, document.getElementById('root'))
  }
}

function demo3 () {
  ReactDOM.render(
    <div>
      <h2>The clock</h2>
      <p>Before the clock</p>
      <Clock />
      <p>After the clock</p>
    </div>,
    document.getElementById('root')
  )
}

function demo4 () {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
}

// demo to run
demo4()
