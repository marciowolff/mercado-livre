import service from './'

const mockDependencies = {
  httpClient: {
    get: jest.fn().mockReturnValue(Promise.resolve({ data: [] }))
  }
}

afterEach(() => {
  mockDependencies.httpClient.get.mockClear()
})

describe('clients > resources > mercadoLivreAPI', () => {
  describe('#factory', () => {
    it('should be a function', () => {
      expect(typeof service).toBe('function')
    })

    it('should return a object', () => {
      expect(typeof service(mockDependencies)).toBe('object')
    })
  })

  describe('service', () => {
    const { search, product } = service(mockDependencies)

    describe('#search', () => {
      it('should be a function', () => {
        expect(typeof search.get).toBe('function')
      })

      it('should call httpClient.get', () => {
        search.get()
        expect(mockDependencies.httpClient.get).toHaveBeenCalledTimes(1)
      })

      it('should call httpClient.get with path /sites/MLA/search', () => {
        search.get()
        expect(mockDependencies.httpClient.get.mock.calls[0][0]).toBe('/sites/MLA/search')
        expect(mockDependencies.httpClient.get.mock.calls[0][1]).toEqual({params: { q: '' }})
      })

      it('should call httpClient.get with path /sites/MLA/search?q=123', () => {
        search.get(123)
        expect(mockDependencies.httpClient.get.mock.calls[0][0]).toBe('/sites/MLA/search')
        expect(mockDependencies.httpClient.get.mock.calls[0][1]).toEqual({params: { q: 123 }})
      })
    })

    describe('#product.detail', () => {
      it('should be a function', () => {
        expect(typeof product.detail).toBe('function')
      })
  
      it('should call httpClient.get', () => {
        product.detail()
        expect(mockDependencies.httpClient.get).toHaveBeenCalledTimes(1)
      })
  
      it('should call httpClient.get with path /items/123', () => {
        product.detail(123)
        expect(mockDependencies.httpClient.get.mock.calls[0][0]).toBe('/items/123')
      })
    })
  
    describe('#product.description', () => {
      it('should be a function', () => {
        expect(typeof product.description).toBe('function')
      })
  
      it('should call httpClient.get', () => {
        product.description()
        expect(mockDependencies.httpClient.get).toHaveBeenCalledTimes(1)
      })
  
      it('should call httpClient.get with path /items/123/description', () => {
        product.description(123)
        expect(mockDependencies.httpClient.get.mock.calls[0][0]).toBe('/items/123/description')
      })
    })

  })
})