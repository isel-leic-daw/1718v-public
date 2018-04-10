test('simple class', () => {
  class Student {
    constructor (name, number) {
      this.name = name
      this.number = number
    }

    toString () {
      return `Student ${this.name} with number ${this.number}`
    }
  }

  const student = new Student('Alice', 12345)
  expect(student.toString()).toBe('Student Alice with number 12345')
  expect(typeof Student).toBe('function')
})

test('Concrete class is a function', () => {
  class Student {
    constructor (name, number) {
      this.name = name
      this.number = number
    }

    toString () {
      return `Student ${this.name} with number ${this.number}`
    }
  }

  function f (TheClass, ...prms) {
    return new TheClass(...prms)
  }

  const student = f(Student, 'Alice', 12345)
  expect(student.toString()).toBe('Student Alice with number 12345')
})

test('Class can extend', () => {
  class User {
    constructor (number) {
      this.number = number
    }
  }

  class Student extends User {
    constructor (name, number) {
      super(number)
      this.name = name
    }

    toString () {
      return `Student ${this.name} with number ${this.number}`
    }
  }

  const student = new Student('Alice', 12345)
  expect(student.toString()).toBe('Student Alice with number 12345')
})
