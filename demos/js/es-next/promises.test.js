const fetch = require('isomorphic-fetch')

test('Promise creation', () => {
  function delay (result, time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result), time)
    })
  }

  console.log(Date.now())
  return delay(1, 100)
    .then(_ => {
      console.log(Date.now())
      return delay(1, 100)
    })
    .then(_ => {
      console.log(Date.now())
    })
})

test = function(){}

test('Simple futures example', () => {
  expect.assertions(1)
  return fetch('https://api.github.com/users/pedrofelix')
    .then(resp => resp.json())
    .then(body => fetch(body.repos_url))
    .then(resp => resp.json())
    .then(body => {
      expect(body[0].name).toBe('CompSec-CodeSamples')
    })
})

test('Simple catch example', () => {
  return fetch('https://api.github.com/users/pedrofelix12345')
    .then(resp => resp.json())
    .then(body => fetch(body.repos_url))
    .then(resp => resp.json())
    .then(body => {
      expect(body[0].name).toBe('CompSec-CodeSamples')
    })
    .catch(e => {})
})

test('Promises.all example', () => {
  const f1 = fetch('https://api.github.com/users/pedrofelix')
  const f2 = fetch('https://api.github.com/users/pmhsfelix')
  const res = Promise.all([f1, f2])
  return res
    .then((resps) => Promise.all(resps.map(resp => resp.json())))
    .then(([b1, b2]) => {
      expect(b1.type).toBe('User')
      expect(b2.type).toBe('User')
    })
})

test('Promises.race example', () => {
  const f1 = fetch('https://api.github.com/users/pedrofelix')
  const f2 = fetch('https://api.github.com/users/pmhsfelix')
  const res = Promise.race([f1, f2])
  return res
    .then(resp => {
      expect(resp.status).toBe(403)
      return resp.json()
    })
    .then(body => {
      console.log(body)
      expect(body.login).toBe('pedrofelix')
    })
})
