import responseHandler from "../../commons/responseHandler";

const mercadoLivreServiceFactory = ({ httpClient }) => ({
  search: {
    get(value = '') {
      return httpClient
        .get('/sites/MLA/search', {params: { q: value }})
        .then(responseHandler)
        .then(data => data)
    },
  },
  product: {
    detail(id) {
      return httpClient
        .get(`/items/${id}`)
        .then(responseHandler)
        .then(data => data)
    },
    description(id) {
      return httpClient
        .get(`/items/${id}/description`)
        .then(responseHandler)
        .then(data => data)
    },
  },
  
});

export default mercadoLivreServiceFactory
