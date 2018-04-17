import React from 'react'
import Line from './line'

export default class extends React.Component {
  constructor (props) {
    console.log('ctor')
    super(props)
    this.state = {date: new Date()}
    this.tick = this.tick.bind(this)
  }

  render () {
    console.log('render')
    const date = this.state.date
    const seconds = date.getSeconds()
    return <div>
      <h2>Clock</h2>
      <p>{date.toLocaleString()}</p>
      <p><Line seconds={seconds} reverse /></p>
    </div>
  }

  componentDidMount () {
    console.log('CDM')
    this.interval = setInterval(this.tick, 100)
  }

  componentWillUnmount () {
    console.log('CWU')
    clearInterval(this.interval)
  }

  tick () {
    this.setState({date: new Date()})
  }
}
