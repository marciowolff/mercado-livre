
import emptyToString from './index'

describe('emptyString', () => {
  it('emptyToString should be a function', () => {
    expect(typeof emptyToString).toBe('function')
  })

  it('emptyToString() should return ""', () => {
    expect(emptyToString()).toEqual("")
  })

  it('emptyToString(undefined) should return ""', () => {
    expect(emptyToString(undefined)).toEqual("")
  })

  it('emptyToString(null) should return ""', () => {
    expect(emptyToString(null)).toEqual("")
  })
})
