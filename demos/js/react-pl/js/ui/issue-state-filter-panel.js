import React from 'react'

// {names, values, onChange}
export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      open: true,
      closed: false
    }
    this.onOpenClick = this.onOpenClick.bind(this)
    this.onClosedClick = this.onClosedClick.bind(this)
  }

  onOpenClick (ev) {
    this.onClick('open', 'closed')
  }

  onClosedClick (ev) {
    this.onClick('closed', 'open')
  }

  onClick (cb1, cb2) {
    console.log(`onClick ${cb1} ${cb2}`)
    this.setState(old => ({
      [cb1]: !old[cb1],
      [cb2]: old[cb1] ? true : old[cb2]
    }))
  }

  render () {
    return (
      <div>
        {this.props.names[0]} <input type='checkbox' name='open' checked={this.state.open} onChange={this.onOpenClick} />
        {this.props.names[1]} <input type='checkbox' name='closed' checked={this.state.closed} onChange={this.onClosedClick} />
      </div>
    )
  }

  componentDidUpdate (oldProps, oldState) {
    const value = this.state.open && this.state.closed
      ? this.props.values[2]
      : this.state.open ? this.props.values[0] : this.props.values[1]
    if (this.state.open !== oldState.open || this.state.closed !== oldState.closed) {
      this.props.onChange(value)
    }
  }
}
