
import MaskCurrencies from './index'

describe('mask currencies', () => {
  it('MaskCurrencies should be a function', () => {
    expect(typeof MaskCurrencies).toBe('function')
  })

  it('MaskCurrencies(0) return should be 0,00', () => {
    const params = [0]
    const result = '0,00'

    expect(MaskCurrencies(...params)).toEqual(result)
  })

  it('MaskCurrencies() return should be 0,00', () => {
    const params = []
    const result = '0,00'

    expect(MaskCurrencies(...params)).toEqual(result)
  })

  it('MaskCurrencies("") return should be 0,00', () => {
    const params = ['']
    const result = '0,00'

    expect(MaskCurrencies(...params)).toEqual(result)
  })

  it('MaskCurrencies(null) return should be 0,00', () => {
    const params = [null]
    const result = '0,00'

    expect(MaskCurrencies(...params)).toEqual(result)
  })

  it('MaskCurrencies(undefined) return should be 0,00', () => {
    const params = [undefined]
    const result = '0,00'

    expect(MaskCurrencies(...params)).toEqual(result)
  })

  it('MaskCurrencies(1) return should be 0,01', () => {
    const params = [1]
    const result = '0,01'

    expect(MaskCurrencies(...params)).toEqual(result)
  })

  it('MaskCurrencies(12) return should be 0,12', () => {
    const params = [12]
    const result = '0,12'

    expect(MaskCurrencies(...params)).toEqual(result)
  })

  it('MaskCurrencies(123) return should be 1,23', () => {
    const params = [123]
    const result = '1,23'

    expect(MaskCurrencies(...params)).toEqual(result)
  })

  it('MaskCurrencies(1234) return should be 12,34', () => {
    const params = [1234]
    const result = '12,34'

    expect(MaskCurrencies(...params)).toEqual(result)
  })

  it('MaskCurrencies(123456) return should be 1.234,56', () => {
    const params = [123456]
    const result = '1.234,56'

    expect(MaskCurrencies(...params)).toEqual(result)
  })

  it('MaskCurrencies(123456789) return should be 1.234.567,89', () => {
    const params = [123456789]
    const result = '1.234.567,89'

    expect(MaskCurrencies(...params)).toEqual(result)
  })

  it('MaskCurrencies(100000000) return should be 1.000.000,00', () => {
    const params = [100000000]
    const result = '1.000.000,00'

    expect(MaskCurrencies(...params)).toEqual(result)
  })

  it('MaskCurrencies(1.1) return should be 1,10', () => {
    const params = [1.1]
    const result = '1,10'

    expect(MaskCurrencies(...params)).toEqual(result)
  })

  it('MaskCurrencies(1.12) return should be 1,12', () => {
    const params = [1.12]
    const result = '1,12'

    expect(MaskCurrencies(...params)).toEqual(result)
  })

  it('MaskCurrencies("R$ 100,12", "R$") return should be R$ 100,12', () => {
    const params = ['R$ 100,12', { symbol: 'R$' }]
    const result = 'R$ 100,12'

    expect(MaskCurrencies(...params)).toEqual(result)
  })

  it('MaskCurrencies("R$ -100,12", "R$") return should be R$ -100,12', () => {
    const params = ['R$ -100,12', { symbol: 'R$' }]
    const result = 'R$ -100,12'

    expect(MaskCurrencies(...params)).toEqual(result)
  })

  it('MaskCurrencies(1, R$") return should be R$ 0,01', () => {
    const params = [1, { symbol: 'R$' }]
    const result = 'R$ 0,01'

    expect(MaskCurrencies(...params)).toEqual(result)
  })

  it('MaskCurrencies("R$ 0,00", "R$") return should be R$ 0,00', () => {
    const params = ['R$ 0.000000000000000', { symbol: 'R$' }]
    const result = 'R$ 0,00'

    expect(MaskCurrencies(...params)).toEqual(result)
  })

  it('MaskCurrencies("0,00") return should be 0,00', () => {
    const params = ['0.000000000000000']
    const result = '0,00'

    expect(MaskCurrencies(...params)).toEqual(result)
  })
})
