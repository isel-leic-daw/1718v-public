test('functions always return a promise', done => {
  async function f () { return 42 }
  const val1 = f()
  expect(val1.then).toBeDefined()

  async function g () { throw new Error('the error') }
  const val2 = g()
  expect(val2.then).toBeDefined()
  // reject promises need to be handled!
  val2.catch(() => done())
})

function delay (result, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(typeof result === 'function' ? result() : result), delay)
  })
}

test('await example', async () => {
  expect.assertions(2)
  let res = await delay(42, 100)
  expect(res).toBe(42)
  let state = 0
  try {
    await Promise.reject(new Error())
    state = 1
  } catch (e) {
    state = 2
  }
  expect(state).toBe(2)
})
