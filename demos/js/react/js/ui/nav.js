import React from 'react'

// [{name, url}]
export default ({repos, selected, onChange}) => {
  return (
    <div>
      <select value={selected} onChange={onChange} >
        {repos.map(repo => <option key={repo.name}
          value={repo.url} >{repo.name}</option>)}
      </select>
      <hr />
    </div>
  )
}
