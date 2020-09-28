import currency from './currencies'

const mask = (value, mask, ...args) =>
  value === '—' || !mask ? value : maskTypes[mask](value, ...args)

const maskTypes = {
  currency,
}

export default mask
