test('promise creation from callbacks', done => {
  function delay (ms) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(42), 1000)
    })
  }

  let a = 1
  delay(100)
    .then(r => {
      expect(a).toBe(2)
      expect(r).toBe(42)
      done()
    })
  a = 2
  expect(a).toBe(2)
})

function delay (result, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(typeof result === 'function' ? result() : result), delay)
  })
}

test('promise chaining - map', done => {
  delay(42, 100)
    .then(r => r + 1)
    .then(r => r + 1)
    .then(r => {
      expect(r).toBe(44)
      done()
    })
})

test('promise chaining - flatMap', done => {
  delay(42, 100)
    .then(r => delay(r + 1, 100))
    .then(r => delay(r + 1, 100))
    .then(r => {
      expect(r).toBe(44)
      done()
    })
})

test('promise chaining and errors', done => {
  let state = 0
  let incrState = () => { state += 1 }
  delay(42, 100)
    .then(() => incrState())
    .then(() => incrState())
    .then(() => { throw new Error() })
    .then(() => incrState())
    .then(() => incrState())
    .catch(e => {
      expect(state).toBe(2)
      done()
    })
})

test('Promise.all', done => {
  let state = 0
  let incrState = () => { state += 1 }
  Promise.all([delay(incrState, 100), delay(incrState, 200)])
    .then(() => {
      expect(state).toBe(2)
      done()
    })
})

test('Promise.race', done => {
  let state = 0
  let incrState = () => { state += 1 }
  Promise.race([delay(incrState, 100), delay(incrState, 200)])
    .then(() => {
      expect(state).toBe(1)
      done()
    })
})
