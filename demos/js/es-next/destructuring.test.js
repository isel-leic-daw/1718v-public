test('some test', () => {
  expect(2 + 3).toBe(5)
})

test('simple destructuring', () => {
  function createStudent () {
    return {
      name: 'Alice',
      number: 12345
    }
  }

  const {name, number} = createStudent()
  expect(name).toBe('Alice')
  expect(number).toBe(12345)
})

test('array deconstruction', () => {
  function createArray () {
    return [1, 2, 3]
  }

  const [first, second] = createArray()
  expect(first).toBe(1)
  expect(second).toBe(2)
})

test('destructuring on args', () => {
  function createStudent () {
    return {
      name: 'Alice',
      number: 12345
    }
  }

  function showStudent ({name, number}) {
    return `Student '${name}' with number ${number}`
  }

  const str = showStudent(createStudent())
  expect(str).toEqual('Student \'Alice\' with number 12345')
})

test('destructuring renaming', () => {
  function createStudent () {
    return {
      name: 'Alice',
      number: 12345
    }
  }

  const {name: studentName, number: studentNumber} = createStudent()
  expect(studentName).toBe('Alice')
  expect(studentNumber).toBe(12345)
})
