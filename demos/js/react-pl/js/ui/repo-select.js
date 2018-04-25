import React from 'react'

// {repos:[{name, url}], render}
export default class extends React.Component {
  constructor (props) {
    super()
    this.state = {
      url: props.repos[0].url
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (ev) {
    this.setState({
      url: ev.target.value
    })
  }

  render () {
    return (
      <div>
        <select value={this.state.url} onChange={this.handleChange}>
          {this.props.repos.map(repo =>
            <option value={repo.url} key={repo.url}>{repo.name}</option>)}
        </select>
        {this.props.render({url: this.state.url})}
      </div>
    )
  }
}
