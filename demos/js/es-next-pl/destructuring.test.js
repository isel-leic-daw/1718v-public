test('simple destructuring for objects', () => {
  function createStudent (name, number) {
    return {
      name: name,
      number: number
    }
  }

  const {name, number} = createStudent('Alice', 12345)
  // const obj = createStudent('Alice', 12345)
  // const name = obj.name
  // const number = obj.number
  expect(name).toBe('Alice')
  expect(number).toBe(12345)
})

test('simple destructuring for objects', () => {
  function createArray () {
    return [1, 2, 3, 4]
  }

  const [first, second] = createArray()
  // const obj = createStudent('Alice', 12345)
  // const name = obj.name
  // const number = obj.number
  expect(first).toBe(1)
  expect(second).toBe(2)
})

test('destructuring with renaming for objects', () => {
  function createStudent (name, number) {
    return {
      name: name,
      number: number
    }
  }

  const {name: studentName, number: studentNumber} = createStudent('Alice', 12345)
  expect(studentName).toBe('Alice')
  expect(studentNumber).toBe(12345)
})

test('more complex destructuring for objects', () => {
  function createStudent (name, number) {
    return {
      name: name,
      number: number,
      programme: {
        name: 'LEIC',
        year: 2015
      },
      enrollments: [2015, 2016]
    }
  }

  const {name, number, programme: {name: pname, year}, enrollments: [first]} = createStudent('Alice', 12345)
  expect(name).toBe('Alice')
  expect(number).toBe(12345)
  expect(pname).toBe('LEIC')
  expect(year).toBe(2015)
  expect(first).toBe(2015)
})

test('destructuring in parameters', () => {
  function createStudent (name, number) {
    return {
      name: name,
      number: number
    }
  }

  function show ({name, number}) {
    return `Student ${name} with number ${number}`
  }

  expect(show(createStudent('Alice', 12345))).toBe('Student Alice with number 12345')
})
