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
  const s = student.toString()
  expect(s).toEqual('Student Alice with number 12345')
  expect(typeof Student).toEqual('function')
})

test('inheritance', () => {
  class User {
    constructor (number) {
      this.number = number
    }
    getNumber () { return this.number }
  }

  class Student extends User {
    constructor (name, number) {
      super(number)
      this.name = name
    }
    getName () { return this.name }
  }

  const student = new Student('Alice', 12345)
  expect(student.getName()).toBe('Alice')
  expect(student.getNumber()).toBe(12345)
})

test('classes are functions', () => {
  class Student {
    constructor (name, number) {
      this.name = name
      this.number = number
    }

    toString () {
      return `Student ${this.name} with number ${this.number}`
    }
  }

  function equatable (base) {
    return class extends base {
      equals (other) {
        if (this.constructor !== other.constructor) return false
        for (let name of Object.getOwnPropertyNames(this)) {
          if (this[name] !== other[name]) return false
        }
        return true
      }
    }
  }

  const EStudent = equatable(Student)
  const student1 = new EStudent('Alice', 12345)
  const student2 = new EStudent('Alice', 12345)
  const student3 = new EStudent('Alice', 12346)
  expect(student1.equals(student2)).toBeTruthy()
  expect(student1.equals(student3)).toBeFalsy()
})

test('beware of the this', done => {
  class Student {
    constructor (name, number) {
      this.name = name
      this.number = number
      this.someMethod = this.someMethod.bind(this)
      setTimeout(this.someMethod, 100)
      // setTimeout(() => this.someMethod(), 100)
      // setTimeout(this.someMethod.bind(this), 100)
    }

    someMethod () {
      expect(this.name).toBe('Alice')
      done()
    }

    toString () {
      return `Student ${this.name} with number ${this.number}`
    }
  }

  const student = new Student('Alice', 12345)
  expect(student.name).toBe('Alice')
})

test('another example §', () => {
  class Student {
    constructor (name, number) {
      this.name = name
      this.number = number
    }

    toString () {
      return `Student ${this.name} with number ${this.number}`
    }
  }

  function create (Ctor, ...args) {
    return new Ctor(...args)
  }

  const student = create(Student, 'Alice', 12345)
  expect(student.toString()).toBe('Student Alice with number 12345')
})

test('Extend from a parameter ', () => {
  class Student {
    constructor (name, number) {
      this.name = name
      this.number = number
    }

    toString () {
      return `Student ${this.name} with number ${this.number}`
    }
  }

  function f (SomeClass) {
    return class extends SomeClass {
      constructor (...args) {
        super(...args)
        this.foo = 'bar'
      }
    }
  }

  const AnotherClass = f(Student)
  const s = new AnotherClass('Alice', 12345)
  expect(s.toString()).toBe('Student Alice with number 12345')
})
