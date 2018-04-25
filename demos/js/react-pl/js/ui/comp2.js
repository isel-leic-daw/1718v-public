import React from 'react'

export default class Comp2 extends React.Component {
  constructor (props) {
    console.log('Comp2 ctor')
    super(props)
    this.handleOnClick = this.handleOnClick.bind(this)
    this.state = {}
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    console.log('Comp2 GDSFP')
    return {counter: nextProps.counter * 10}
  }

  render () {
    console.log('Comp2 render')
    return <div>
      <button onClick={this.handleOnClick}>+</button>
      <div>Props counter: {this.props.counter} </div>
      <div>State counter: {this.state.counter} </div>
    </div>
  }

  handleOnClick () {
    this.setState(old => ({counter: old.counter + 1}))
  }

  componentDidMount () {
    console.log('Comp2 CDM')
  }

  shouldComponentUpdate () {
    console.log('Comp2 SCU')
    return true
  }

  componentDidUpdate () {
    console.log('Comp2 CDU')
  }

  componentWillUnmount () {
    console.log('Comp2 CWU')
  }
}
