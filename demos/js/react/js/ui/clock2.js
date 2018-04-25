import React from 'react'
import Line from './line'

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {date: new Date()}
    this.tick = this.tick.bind(this)
    console.log('ctor')
  }

  render () {
    const date = this.state.date
    const seconds = date.getSeconds()
    console.log('render')
    return <div>
      <p>{date.toLocaleString()}</p>
      <Line count={seconds} />
    </div>
  }

  tick () {
    console.log('tick')
    this.setState({date: new Date()})
  }

  componentDidMount () {
    console.log('CDM')
    this.interval = setInterval(this.tick, 1000)
  }

  componentWillUnmount () {
    console.log('CWU')
    clearInterval(this.interval)
  }
}
