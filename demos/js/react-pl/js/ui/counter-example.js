import React from 'react'
import Counter from './counter'

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {sum: 0, input: '0', inError: false}
    this.handleChange = this.handleChange.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.clearError = this.clearError.bind(this)
  }

  isDigit (c) {
    if (c.length === 0) return true
    for (let i = 0; i < c.length; ++i) {
      if (c[i] < '0' || c[i] > '9') return false
    }
    return true
  }

  handleChange (oldValue, newValue) {
    this.setState(old => ({sum: old.sum + (newValue - oldValue)}))
  }

  clearError () {
    this.setState({inError: false, abc: 1})
  }

  handleInputChange (ev) {
    console.log('handleInputChange')
    if (!this.isDigit(ev.target.value)) {
      this.setState({inError: true})
      if (this.timeout) clearTimeout(this.timeout)
      this.timeout = setTimeout(this.clearError, 3000)
    } else {
      if (this.timeout) clearTimeout(this.timeout)
      this.setState({input: ev.target.value, inError: false})
    }
  }

  render () {
    return (
      <div>
        <Counter value={0} onChange={this.handleChange} />
        <Counter value={0} onChange={this.handleChange} />
        <Counter value={0} onChange={this.handleChange} />
        <div><input type='number' value={this.state.input} onChange={this.handleInputChange} /></div>
        <div>{this.state.inError ? <span>Only digits</span> : <span />} </div>
        <span>Sum is: {this.state.sum} </span>
      </div>
    )
  }
}
