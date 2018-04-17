import React from 'react'

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {show: true}
    this.onClickHandler = this.onClickHandler.bind(this)
  }

  render () {
    const text = this.state.show ? 'hide' : 'show'
    const inner = this.state.show ? this.props.children : <div>...</div>
    return <div>
      <button onClick={this.onClickHandler}>{text}</button>
      {inner}
    </div>
  }

  onClickHandler () {
    this.setState(oldState => ({show: !oldState.show}))
  }
}
