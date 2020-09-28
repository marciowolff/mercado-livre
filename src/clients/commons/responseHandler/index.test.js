import responseHandler from './'

describe('clients > commons > responseHandler', () => {
  it('should be a function', () => {
    expect(typeof responseHandler).toBe('function')
  })

  it('should return an empty array when response status is 404', () => {
    expect(responseHandler({ status: 404 })).toEqual({ status: 404 })
  })

  it('should return an empty array when response status is 200', () => {
    expect(responseHandler({ status: 200 })).toBeUndefined()
  })

  it('should return an error with response when response status is greater than or equal to 300', () => {
    const response300 = { status: 300, data: {} }
    const handled300 = responseHandler(response300)
    expect(handled300).toEqual({ status: 300 })

    const response400 = { status: 400, data: {} }
    const handled400 = responseHandler(response400)
    expect(handled400).toEqual({ status: 400 })

    const response500 = { status: 500, data: {} }
    const handled500 = responseHandler(response500)
    expect(handled500).toEqual({ status: 500 })
  })

  it('should return an error named "Internal" when response data has no error property', () => {
    const response = responseHandler({ status: 500, data: { error: 'test' } })
    expect(response).toEqual({ error: 'test', status: 500 })
  })

  it('should return response data when request has no issues', () => {
    const fake = { status: 200, data: [{ test: true }] }
    expect(responseHandler(fake)).toBe(fake.data)
  })
})