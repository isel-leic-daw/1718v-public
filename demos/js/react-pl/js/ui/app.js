import React from 'react'
import ShowHide from './ShowHide'
import Clock from './clock'
import Counter from './counter'
import CounterExample from './counter-example'
import Comp2 from './comp2'
import Comp1 from './comp1'
import IssueList from './issue-list'
import RepoSelect from './repo-select'

export default function (props) {
  const repos = [
    {name: 'react', url: 'https://api.github.com/repos/facebook/react/issues'},
    {name: 'daw', url: 'https://api.github.com/repos/isel-leic-daw/1718v-public/issues'}
  ]
  return (
    <RepoSelect repos={repos}
      render={({url}) => <IssueList url={url} />}
    />
  )
}
