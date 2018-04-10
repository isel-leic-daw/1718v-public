class Student {
  // constructor has a special name
  constructor (name, number) {
    this.name = name
    this.number = number
  }

  // methods don't need any special keyword
  toString () { return `Student '${this.name}' with number ${this.number}` }
}

test('simple class', () => {
  const student = new Student('Alice', 12345)
  expect(student.toString()).toEqual('Student \'Alice\' with number 12345')
})

test('class is a function', () => {
  expect(typeof Student).toBe('function')
  expect(Student.prototype.toString).toBeDefined()
})

test('result is an object with only the defined fields ', () => {
  const student = new Student('Alice', 12345)
  expect(Object.getOwnPropertyNames(student).length).toBe(2)
  expect(Object.getOwnPropertyNames(student)).toEqual(['name', 'number'])
})

// not ethat this is an "asynchronous" test
test('beware of this', done => {
  class SomeClass {
    constructor () {
      this.field = 42
      setTimeout(this.someMethod, 10)
    }
    someMethod () {
      expect(this.field).toBe(undefined)
      done()
    }
  }
  const o = new SomeClass()
  expect(o.field).toBe(42)
})

test('Since class definitions are expression, some unusual things are possible', () => {
  const showable = aClass => class extends aClass {
    equals (other) {
      if (this.constructor !== other.constructor) return false
      for (let name of Object.getOwnPropertyNames(this)) {
        if (this[name] !== other[name]) return false
        return true
      }
    }
  }

  // yes, this is perfectly valid Javascript
  // notice that the function argument is a class
  const SomeClass = showable(class {
    constructor (a, b) {
      this.a = a
      this.b = b
    }
  })

  const o1 = new SomeClass(1, 2)
  const o2 = new SomeClass(1, 2)
  const o3 = new SomeClass(2, 3)
  expect(o1.equals(o2)).toBeTruthy()
  expect(o2.equals(o3)).toBeFalsy()
  expect(o3.equals(42)).toBeFalsy()
})
