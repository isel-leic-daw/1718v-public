import React from 'react'

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {show: false}
    this.toggle = this.toggle.bind(this)
  }

  toggle () {
    this.setState(oldState => ({show: !oldState.show}))
  }

  render () {
    const show = this.state.show
    const text = show ? 'hide' : 'show'
    return <div>
      <button onClick={this.toggle} >{text}</button>
      {show ? this.props.children : <div>...</div>}
    </div>
  }
}
