test('async function always return a promise', () => {
  expect.assertions(3)
  async function f () {
    return 2
  }
  const res = f()
  expect(res).not.toBe(2)
  expect(res.then).toBeDefined()
  return res.then(v => {
    expect(v).toBe(2)
  })
})

test('async function always return a promise of a value', () => {
  expect.assertions(3)
  async function f () {
    return Promise.resolve(2)
  }
  const res = f()
  expect(res).not.toBe(2)
  expect(res.then).toBeDefined()
  return res.then(v => {
    expect(v).toBe(2)
  })
})

test('async function always return a promise of a value', () => {
  expect.assertions(2)
  async function f () {
    throw new Error('the error')
  }
  const res = f()
  expect(res.then).toBeDefined()
  return res.catch(e => {
    expect(e.message).toBe('the error')
  })
})

function delay (result, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(result), time)
  })
}

function log (msg) {
  console.log(`[${Date.now()}] ${msg}`)
}

test('await example', () => {
  async function f () {
    for (let i = 1; i < 5; ++i) {
      log(`step ${i}`)
      await delay(1, 100)
    }
    // log('step 1')
    // await delay(1, 100)
    // log('step 2')
    // await delay(1, 100)
    // log('step 3')
    // await delay(1, 100)
    // log('step 4')
  }

  log('before call')
  const p = f()
  log('after call')
  return p
    .then(v => {
      log(`final ${v}`)
    })
})
