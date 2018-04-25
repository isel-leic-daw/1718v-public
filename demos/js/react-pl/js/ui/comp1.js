import React from 'react'
import Comp2 from './comp2'

export default class extends React.Component {
  constructor (props) {
    console.log('Comp1 ctor')
    super(props)
    this.state = {counter: 0}
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  render () {
    console.log('Comp1 render')
    return <div>
      <button onClick={this.handleOnClick}>+</button>
      <div>State counter: {this.state.counter} </div>
      <h2>Child component</h2>
      {this.state.counter % 3 === 3 ? <div /> : <Comp2 counter={this.state.counter} />}
    </div>
  }

  handleOnClick () {
    this.setState(old => ({counter: old.counter + 1}))
  }
}
