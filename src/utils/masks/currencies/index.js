
import {
  emptyToString
} from '../../'

const currencies = (value, { symbol } = {}) => {
  let currency = String(emptyToString(value) ? value : '0').replace(symbol, '').trim()
  let num
  let cents

  if (!Number(currency.replace(symbol, '').replace(/,./g, ''))) {
    return `${symbol ? symbol + ' 0,00' : '0,00'}`;
  }

  if(emptyToString(currency.split('.')[1]) || emptyToString(currency.split(',')[1])) {
    const splitValue = currency.split('.')[1] ? currency.split('.') : currency.split(',')
    num = splitValue[0]
    cents = splitValue[1]
    cents = cents.length === 1 ? cents + '0' : cents

  } else {
    while (currency.length < 3)
      currency = `0${currency}`

    const currencyLength = currency.length
    num = currency.substring(0, currencyLength - 2)
    cents = currency.substring(currencyLength - 2, currencyLength)
  }

  return `${symbol ? symbol+' ' : ''}${num.replace(/\B(?=(\d{3})+\b)/g, ".")},${cents}`
}

export default currencies
