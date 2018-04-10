const fetch = require('isomorphic-fetch')

const ignore = () => {}

ignore('promises', () => {
  return fetch('https://api.github.com/users/pedrofelix')
    .then(resp => resp.json())
    .then(body => fetch(body.repos_url))
    .then(resp => resp.json())
    .then(body => {
      console.log(body[0].name)
      expect(body[0].name).toBe('CompSec-CodeSamples')
    })
})

function delay (result, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(result)
    }, time)
  })
}

ignore('Promise creation', () => {
  function showAndIncrement (i) {
    console.log(Date.now())
    return delay(i + 1, 100)
  }

  return delay(1, 100)
    .then(r => showAndIncrement(r))
    .then(r => showAndIncrement(r))
    .then(r => showAndIncrement(r))
})

ignore('promise chaining and errors', () => {
  let state = 0
  let incrState = () => { state += 1 }
  return delay(42, 100)
    .then(() => incrState())
    .then(() => incrState())
    .then(() => { throw new Error() })
    .then(() => incrState())
    .then(() => incrState())
    .catch(e => {
      expect(state).toBe(2)
    })
})

test('Promise.all', () => {
  console.log(Date.now())
  const p1 = delay(1, 2000)
  const p2 = delay(2, 1000)
  return Promise.all([p1, p2])
    .then(([v1, v2]) => {
      console.log(Date.now())
      expect(v1).toBe(1)
      expect(v2).toBe(2)
    })
})

test('Promise.all with rejection', () => {
  console.log(Date.now())
  const p1 = delay(1, 2000)
  const p2 = delay(2, 1000)
  const p3 = Promise.reject(new Error('the error'))
  return Promise.all([p1, p2, p3])
    .then(([v1, v2]) => {
      console.log(Date.now())
      expect(true).toBeFalsy()
    })
    .catch(e => {
      console.log(Date.now())
      expect(e.message).toBe('the error')
    })
})

test('Promise.race', () => {
  console.log(Date.now())
  const p1 = delay(1, 2000)
  const p2 = delay(2, 1000)
  return Promise.race([p1, p2])
    .then(v => {
      console.log(Date.now())
      expect(v).toBe(2)
    })
})
