test('async functions always return a promise', () => {
  async function f () {
    return 2
  }

  const res = f()

  expect(res).not.toBe(2)
  expect(res.then).toBeDefined()
})

test('async functions unwrap promises', () => {
  async function f () {
    return Promise.resolve(2)
  }
  const res = f()
  return res.then(v => {
    expect(v).toBe(2)
  })
})

test('async functions wrap exceptions into promises', () => {
  async function f () {
    throw new Error('the error')
  }
  const res = f()
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
    log('step 1')
    await delay(1, 100)
    log('step 2')
    await delay(1, 100)
    log('step 3')
    await delay(1, 100)
    log('step 4')
  }

  log('before call')
  const p = f()
  log('after call')
  return p
})
