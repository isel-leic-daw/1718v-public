import React from 'react'
import fetch from 'isomorphic-fetch'
import parser from 'parse-link-header'

const LoadStates = {
  loading: 'loading',
  loaded: 'loaded',
  error: 'error'
}

// props = {url}
export default class extends React.Component {
  constructor (props) {
    super(props)
    this.changeHandler = this.changeHandler.bind(this)
    this.state = {
      url: props.url,
      loadState: LoadStates.loading,
      filter: {
        open: true,
        closed: false
      }
    }
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    return {url: nextProps.url, loadState: LoadStates.loading}
  }

  componentDidMount () {
    this.loadIfNeeded()
  }

  componentDidUpdate () {
    this.loadIfNeeded()
  }

  loadIfNeeded () {
    if (this.state.loadState !== LoadStates.loading) return
    const open = this.state.filter.open
    const closed = this.state.filter.closed
    const value = open && closed ? 'all' : open ? 'open' : 'closed'
    const url = this.state.url === this.props.url
      ? this.state.url + '?' + `state=${value}`
      : this.state.url
    console.log('loading ' + url)
    fetch(url)
      .then(resp => {
        if (resp.status >= 400) {
          console.log(resp.status)
          throw new Error(resp)
        }
        return resp.json().then(json => {
          const linkHeader = resp.headers.get('Link')
          const parsed = (linkHeader && parser(linkHeader)) || {}
          this.setState({
            issues: json,
            next: parsed.next ? parsed.next.url : undefined,
            previous: parsed.prev ? parsed.prev.url : undefined,
            loadState: LoadStates.loaded
          })
        })
      })
      .catch(error => {
        console.log(error)
        this.setState({
          loadState: LoadStates.error,
          error: error
        })
      })
  }

  changeHandler (ev) {
    const name = ev.target.name
    const self = name
    const other = name === 'open' ? 'closed' : 'open'
    this.setState(old => ({
      url: this.props.url,
      loadState: LoadStates.loading,
      filter: {
        [self]: !old.filter[self],
        [other]: !old.filter[self] === false ? true : old.filter[other]
      }
    }))
  }

  reload (url) {
    this.setState({
      url: url,
      loadState: LoadStates.loading
    })
  }

  render () {
    const loaded = this.state.loadState === LoadStates.loaded
    return (
      <div>
        <h2>Issue list</h2>
        open: <input type='checkbox' checked={this.state.filter.open} name='open' onChange={this.changeHandler} />
        closed: <input type='checkbox' checked={this.state.filter.closed} name='closed' onChange={this.changeHandler} />
        <div>
          <button disabled={!this.state.previous || !loaded}
            onClick={() => this.reload(this.state.previous)}>previous</button>
          <button disabled={!this.state.next || !loaded}
            onClick={() => this.reload(this.state.next)}>next</button>
        </div>
        {this.renderBody()}
      </div>
    )
  }

  renderBody () {
    switch (this.state.loadState) {
      case LoadStates.loading:
        return this.renderLoading()
      case LoadStates.loaded:
        return this.renderLoaded()
      case LoadStates.error:
        return this.renderError()
    }
  }

  renderLoading () {
    return <div>... loading ...</div>
  }

  renderError () {
    return <div>Error</div>
  }

  renderLoaded () {
    return (
      <div>
        <ul>
          {this.state.issues.map(issue => (
            <li key={issue.id}>{issue.title} - {issue.state.toUpperCase()}</li>
          ))}
        </ul>
      </div>
    )
  }
}
