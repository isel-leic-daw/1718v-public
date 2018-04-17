import React from 'react'
import ReactDOM from 'react-dom'

// Based on the React documents at https://reactjs.org/docs/hello-world.html

// Render a single element with text inside
function example0 () {
  ReactDOM.render(
    React.createElement('h1', {}, 'Hello world'),
    document.getElementById('root')
  )
}

// Repeated rendering of a more complex tree where only an element changes
function example1 () {
  setInterval(() => {
    ReactDOM.render(
      React.createElement('div', {},
        React.createElement('h1', {}, 'Current date and time'),
        React.createElement('p', {}, `${new Date().toLocaleString()}`)),
      document.getElementById('root'))
  }, 1000)
}

// Slightly more complex tree
function example2 () {
  setInterval(() => {
    const date = new Date()
    const seconds = date.getSeconds()
    const line = [...Array(seconds).keys()].map(i => React.createElement('span', {key: i}, ` ${i} `))
    ReactDOM.render(
      React.createElement('div', {},
        React.createElement('h1', {}, 'Current date and time'),
        React.createElement('p', {}, `${date.toLocaleString()}`),
        React.createElement('div', {}, line)),
      document.getElementById('root'))
  }, 1000)
}

// Making it syntactlically simpler by using JSX
function example3 () {
  setInterval(() => {
    const date = new Date()
    const seconds = date.getSeconds()
    const line = [...Array(seconds).keys()].map(i => <span key={i} >{` ${60 - i} `}</span>)
    ReactDOM.render(
      <div>
        <h1>Current date and time</h1>
        <p>{date.toLocaleString()}</p>
        {line}
      </div>,
      document.getElementById('root'))
  }, 1000)
}

// Extracting line as a *component*
function example4 () {
  const Line = (props) => [...Array(props.s).keys()].map(i => <span key={i} >({60 - i})</span>)
  setInterval(() => {
    const date = new Date()
    const seconds = date.getSeconds()
    ReactDOM.render(
      <div>
        <h1>Current date and time</h1>
        <p>{date.toLocaleString()}</p>
        <Line s={seconds} />
      </div>,
      document.getElementById('root'))
  }, 1000)
}

// Understanding the render call sequence
function example5 () {
  const Block = (props) => {
    console.log('render Block')
    return <Line s={props.s} />
  }
  const Line = (props) => {
    console.log('render Line')
    return [...Array(props.s).keys()].map(i => <span key={i} >({60 - i})</span>)
  }
  setInterval(() => {
    const date = new Date()
    const seconds = date.getSeconds()
    console.log('-- creating the tree --')
    const tree =
      <div>
        <h1>Current date and time</h1>
        <p>{date.toLocaleString()}</p>
        <Block s={seconds} />
      </div>
    console.log('calling ReactDOM.render')
    ReactDOM.render(
      tree,
      document.getElementById('root'))
  }, 1000)
}

// Adding state to components

const Line = (props) => [...Array(props.s).keys()].map(i => <span key={i} >({i})</span>)

class Clock extends React.Component {
  constructor (props) {
    console.log('ctor')
    super(props)
    this.state = {date: new Date()}
  }

  render () {
    console.log('render')
    const seconds = this.state.date.getSeconds()
    return <div>
      <h1>Current date and time</h1>
      <p>{this.state.date.toLocaleString()}</p>
      <Line s={seconds} />
    </div>
  }

  componentDidMount () {
    console.log('CDM')
    this.timer = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount () {
    console.log('CWU')
    clearInterval(this.timer)
  }

  tick () {
    console.log('tick')
    this.setState({date: new Date()})
  }
}

function example6 () {
  ReactDOM.render(
    <Clock />,
    document.getElementById('root'))
}

class ShowHide extends React.Component {
  constructor (props) {
    super(props)
    this.state = {show: props.show}
    this.toggle = this.toggle.bind(this)
  }

  render () {
    const text = this.state.show ? 'hide' : 'show'
    const child = this.state.show ? this.props.children : <div>...</div>
    return <div>
      <button onClick={this.toggle}>{text}</button>
      {child}
    </div>
  }

  toggle () {
    this.setState(state => ({show: !state.show}))
  }
}

function example7 () {
  console.log(Clock)
  ReactDOM.render(
    <ShowHide show >
      <Clock />
    </ShowHide>,
    document.getElementById('root'))
}

// Example to run
example7()
