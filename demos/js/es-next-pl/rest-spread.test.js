test('rest oper in arrays', () => {
  const arr = [1, 2, 3, 4]
  const [a, b, c] = arr
  const [x, y, ...z] = arr

  expect(c).toBe(3)
  expect(z).toEqual([3, 4])

  expect(a).toBe(1)
  expect(x).toBe(1)
  expect(b).toBe(2)
  expect(y).toBe(2)
})

test('rest oper in objects', () => {
  function createStudent (name, number) {
    return {
      name: name,
      number: number,
      programme: 'LEIC',
      year: 2015
    }
  }

  const {name, number, ...rem} = createStudent('Alice', 12345)

  expect(name).toBe('Alice')
  expect(number).toBe(12345)
  expect(rem).toEqual({
    programme: 'LEIC',
    year: 2015

  })
})

test('rest operator in functions', () => {
  function f (a, b, ...rem) {
    return [a, b, rem]
  }

  const res = f(1, 2, 3, 4, 5)
  expect(res).toEqual([1, 2, [3, 4, 5]])
})

test('spread oper in arrays', () => {
  const a1 = [1, 2]
  const a2 = ['a', 'b']
  const res1 = [a1, a2]
  const res2 = [...a1, ...a2]

  expect(res1).toEqual([[1, 2], ['a', 'b']])
  expect(res2).toEqual([1, 2, 'a', 'b'])
})

test('spread oper in objects', () => {
  const student = {name: 'Alice', number: 12345}
  const programme = {programName: 'LEIC', year: 2015}

  const res1 = {student, programme}
  const res2 = {...student, ...programme}
  expect(res1).toEqual({
    student: {
      name: 'Alice',
      number: 12345
    },
    programme: {
      programName: 'LEIC',
      year: 2015
    }
  })
  expect(res2).toEqual({
    name: 'Alice',
    number: 12345,
    programName: 'LEIC',
    year: 2015
  })
})

test('spread in functions', () => {
  function f (a, b, c, d) {
    return [a, b, c, d]
  }

  const a1 = [1, 2]
  const a2 = ['a', 'b']
  // const res1 = f(student, programme)
  const res2 = f(...a1, ...a2)
  expect(res2).toEqual([
    1, 2, 'a', 'b'
  ])
})
