import React from 'react'
import IssueList from './issue-list'
import Nav from './nav'

const repos = [
  {name: 'react', url: 'https://api.github.com/repos/facebook/react/issues'},
  {name: 'DAW', url: 'https://api.github.com/repos/isel-leic-daw/1718v-public/issues'}
]

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {selected: repos[0].url}
    this.changeHandler = this.changeHandler.bind(this)
  }

  changeHandler (ev) {
    console.log('changeHandler' + ev.target.value)
    this.setState({
      selected: ev.target.value
    })
  }

  render () {
    return (
      <div>
        <div>URL: {this.state.selected} </div>
        <Nav repos={repos} selected={this.state.selected} onChange={this.changeHandler} />
        <IssueList url={this.state.selected} />
      </div>
    )
  }
}
