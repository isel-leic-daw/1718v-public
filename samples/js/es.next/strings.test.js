test('simple literals', () => {
  const alice = {name: 'Alice', number: 12345}
  const s = `Student '${alice.name}' with number ${alice.number}`
  expect(s).toEqual('Student \'Alice\' with number 12345')
})

test('tagged literals', () => {
  function f (parts, name, number) {
    expect(parts).toEqual(['Student \'', '\' with number ', ''])
  }
  const alice = {name: 'Alice', number: 12345}
  f`Student '${alice.name}' with number ${alice.number}`
})
