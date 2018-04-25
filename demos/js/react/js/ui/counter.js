import React from 'react'

// <Counter initial=1
export default class extends React.Component {
  constructor (props) {
    super(props)
    console.log('Counter ctor')
    const {initial, id} = props
    this.state = {counter: initial}
    this.inc = this.inc.bind(this)
    this.dec = this.dec.bind(this)
    this.onChange = props.onChange
    this.id = id
  }

  inc () {
    this.onChange(this.id, this.state.counter, this.state.counter + 1)
    // this.setState(old => ({counter: old.counter + 1}))
  }

  dec () {
    this.onChange(this.id, this.state.counter, this.state.counter - 1)
    // this.setState(old => ({counter: old.counter - 1}))
  }

  render () {
    return (
      <span>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
        {this.state.counter}
      </span>
    )
  }
}
