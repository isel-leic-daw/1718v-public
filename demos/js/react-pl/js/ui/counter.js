import React from 'react'

// <Counter value={2} />
export default class extends React.Component {
  constructor (props) {
    const {value} = props
    super(props)
    this.state = {value: value}
    this.inc = this.inc.bind(this)
    this.dec = this.dec.bind(this)
  }

  inc () {
    this.props.onChange(this.state.value, this.state.value + 1)
    this.setState(old => ({value: old.value + 1}))
  }

  dec () {
    this.props.onChange(this.state.value, this.state.value - 1)
    this.setState(old => ({value: old.value - 1}))
  }

  render () {
    return (
      <div>
        <button onClick={this.inc}> + </button>
        <button onClick={this.dec}> - </button>
        <span>{this.state.value}</span>
      </div>
    )
  }
}
