import React from 'react'
import Line from './line'

export default function ({date}) {
  const seconds = date.getSeconds()
  return <div>
    <h2>Example 3</h2>
    <p>Some paragraph</p>
    <p>{date.toLocaleString()}</p>
    <Line count={seconds} />
  </div>
}
