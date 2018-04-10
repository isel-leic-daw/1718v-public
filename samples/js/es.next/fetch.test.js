const fetch = require('isomorphic-fetch')

test('GET and check 200 status', async () => {
  expect.assertions(1)
  const resp = await fetch('https://httpbin.org/get')
  expect(resp.status).toBe(200)
})

test('GET and check 400 status', async () => {
  expect.assertions(1)
  // a non-200 does not throw
  const resp = await fetch('https://httpbin.org/status/400')
  expect(resp.status).toBe(400)
})

test('GET and access body', async () => {
  expect.assertions(1)
  const resp = await fetch('https://httpbin.org/get')
  const body = await resp.json()
  expect(body.url).toBe('https://httpbin.org/get')
})

test('GET and request headers', async () => {
  expect.assertions(1)
  const resp = await fetch('https://httpbin.org/get', {
    headers: {
      Authorization: 'bearer the-access-token'
    }
  })
  const body = await resp.json()
  expect(body.headers.Authorization).toBe('bearer the-access-token')
})

test('Using a request object directly', async () => {
  expect.assertions(2)
  const req = new Request('https://httpbin.org/post', {
    headers: {
      Authorization: 'bearer the-access-token'
    },
    method: 'POST'
  })
  const resp = await fetch(req)
  expect(resp.status).toBe(200)
  const body = await resp.json()
  expect(body.headers.Authorization).toBe('bearer the-access-token')
})
