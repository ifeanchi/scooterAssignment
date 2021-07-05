const User = require('../Src/User')

describe('User Object', () => {
const testUser = new User('grace335@gmail.com', '4455') // username, password

test('Username is a type String', () => {
    expect(typeof testUser.username).toBe('string')
  })
   
  test('Password is a type String', () => {
    expect(typeof testUser.password).toBe('string')
  })

  test('User email is in correct format @gmail', () => {
      const email = testUser.username
      const indexOfAt = email.split('').indexOf('@')
      expect(email.slice(indexOfAt)).toBe('@gmail.com')
  })

  test('the changeUsername method changes the this.username property', () => {
      testUser.changeUsername('gldis@gmail.com')
      expect(testUser.username).toBe('gldis@gmail.com')
  })

})
 