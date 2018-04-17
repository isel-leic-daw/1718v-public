import React from 'react'

export default function ({seconds, reverse}) {
  const value = i => reverse ? 60 - i : i
  return [...new Array(seconds).keys()].map(i => <span>{` (${value(i)}) `}</span>)
}
