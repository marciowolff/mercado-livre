import api from './api'

it('should be a function', () => {
  expect(typeof api).toBe('function')
})

it('should return services api', () => {
  const service = api()

  expect(service.mercadoLivreAPI).toBeTruthy()
  expect(service.mercadoLivreAPI.search).toBeTruthy()
  expect(service.mercadoLivreAPI.product).toBeTruthy()
})
