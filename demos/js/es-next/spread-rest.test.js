test('rest operator on arrays', () => {
  function createArray () {
    return [1, 2, 3, 4]
  }

  const [first, second, ...remaining] = createArray()
  expect(first).toBe(1)
  expect(second).toBe(2)
  expect(remaining).toEqual([3, 4])
})

test('rest operator on objects', () => {
  function createStudent () {
    return {
      name: 'Alice',
      number: 12345,
      programme: 'LEIC',
      year: 2015
    }
  }

  const {name, number, ...remaining} = createStudent()
  expect(name).toBe('Alice')
  expect(number).toBe(12345)
  expect(remaining).toEqual({programme: 'LEIC', year: 2015})
})

test('rest operator on arguments', () => {
  function f (a, b, ...rem) {
    return rem
  }

  const res = f(1, 2, 3, 4)
  expect(res).toEqual([3, 4])
})

test('spread operator on arrays', () => {
  const a1 = [1, 2]
  const a2 = ['a', 'b']
  const res1 = [a1, a2]
  const res2 = [...a1, ...a2]
  expect(res1).toEqual([[1, 2], ['a', 'b']])
  expect(res2).toEqual([1, 2, 'a', 'b'])
})

test('spread operator on objects', () => {
  const o1 = {name: 'Alice', number: 12345}
  const o2 = {programme: 'LEIC', year: 2015}
  const res = {...o1, ...o2}
  expect(res).toEqual({
    name: 'Alice',
    number: 12345,
    programme: 'LEIC',
    year: 2015
  })
})

test('spream operator in calls', () => {
  function f (a, b, c, d) {
    return [a, b, c, d]
  }
  const arr = [1, 2, 3]
  const res = f(arr)
  expect(res).toEqual([[1, 2, 3], undefined, undefined, undefined])
  const res2 = f(...arr)
  expect(res2).toEqual([1, 2, 3, undefined])
})
