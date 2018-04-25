import React from 'react'
import fetch from 'isomorphic-fetch'

import IssueStateFilterPanel from './issue-state-filter-panel'
import PaginatorPanel from './paginator-panel'

const FetchStates = {
  loading: 'loading',
  loaded: 'loaded',
  error: 'error'
}

export default class extends React.Component {
  // props = {url}
  constructor (props) {
    super(props)
    this.state = {
      fetchState: FetchStates.loading,
      queryString: ''
    }
    this.handleFilterChange = this.handleFilterChange.bind(this)
    this.handlePagination = this.handlePagination.bind(this)
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    return {
      fetchState: FetchStates.loading,
      url: undefined
    }
  }

  componentDidMount () {
    this.loadIfNeeded()
  }

  componentDidUpdate () {
    this.loadIfNeeded()
  }

  loadIfNeeded () {
    if (this.state.fetchState !== FetchStates.loading) return
    const url = this.state.url || (this.props.url + '?' + this.state.queryString)
    console.log(url)
    return fetch(url)
      .then(resp => {
        if (resp.status !== 200) {
          throw new Error()
        }
        return resp.json().then(json => {
          this.setState({
            fetchState: FetchStates.loaded,
            json: json,
            response: resp
          })
        })
      })
      .catch(error => {
        this.setState({fetchState: FetchStates.error, error: error})
      })
  }

  handleFilterChange (value) {
    console.log('handleFilterChange')
    this.setState({
      queryString: value,
      url: undefined,
      fetchState: FetchStates.loading
    })
  }

  handlePagination (url) {
    this.setState({
      url: url,
      fetchState: FetchStates.loading
    })
  }

  render () {
    return (
      <div>
        <div>
          <IssueStateFilterPanel names={['open', 'closed']}
            values={['state=open', 'state=closed', 'state=all']}
            onChange={this.handleFilterChange} />
          <PaginatorPanel response={this.state.response} onClick={this.handlePagination} />
        </div>
        {this.renderContent()}
      </div>
    )
  }

  renderContent () {
    switch (this.state.fetchState) {
      case FetchStates.loading:
        return this.renderLoading()
      case FetchStates.loaded:
        return this.renderLoaded()
      case FetchStates.error:
        return this.renderError()
    }
  }

  renderLoading () {
    return <div>... loading ...</div>
  }

  renderLoaded () {
    const issues = this.state.json
    const style = {
      marginTop: '10px'
    }
    return (
      <div>
        {issues.map(issue => <div key={issue.id} style={style}>{issue.state}-{issue.title}</div>)}
      </div>
    )
  }

  renderError () {
    return <div> ERROR </div>
  }
}
