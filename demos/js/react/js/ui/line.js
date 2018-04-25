import React from 'react'

export default function ({count}) {
  return <div>
    {[...Array(count).keys()].map(i => <span key={i}>{`(${i})`}</span>)}
  </div>
}
