// functions
test('rest operator in parameters', () => {
  function f (args) {
    return args
  }

  function g (...args) {
    return args
  }

  function h (a, ...args) {
    return args
  }

  expect(f(1, 2, 3, 4)).toEqual(1)
  expect(g(1, 2, 3, 4)).toEqual([1, 2, 3, 4])
  expect(h(1, 2, 3, 4)).toEqual([2, 3, 4])
})

test('spread operator in calls', () => {
  function f (a, b, c) {
    return [a, b, c]
  }
  const arr = [1, 2, 3]
  expect(f(arr)).toEqual([[1, 2, 3], undefined, undefined])
  expect(f(...arr)).toEqual([1, 2, 3])
})

// arrays
test('rest operator in array deconstruction', () => {
  const arr = [1, 2, 3, 4]
  const [a, b, ...c] = arr
  expect(a).toBe(1)
  expect(b).toBe(2)
  expect(c).toEqual([3, 4])
})

test('spread operator in arrays', () => {
  const arr = [1, 2, 3]
  const res1 = [arr, arr]
  expect(res1).toEqual([[1, 2, 3], [1, 2, 3]])
  const res2 = [...arr, ...arr]
  expect(res2).toEqual([1, 2, 3, 1, 2, 3])
})

// objects
test('rest operator in object deconstruction', () => {
  const o = {a: 1, b: 2, c: 3, d: 4}
  const {a: x, b: y, ...z} = o
  expect(x).toBe(1)
  expect(y).toBe(2)
  expect(z).toEqual({c: 3, d: 4})
})

test('spread operator in objects', () => {
  const o1 = {a: 1, b: 2}
  const o2 = {...o1, c: 3}
  expect(o2).toEqual({a: 1, b: 2, c: 3})
})
