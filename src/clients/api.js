import { createClient, objectToQueryString } from "./commons/http";
import mercadoLivreServiceFactory from "./resources/mercadoLivreAPI";

export default function api(baseURL = "") {
  const httpClient = createClient(baseURL);
  const dependencies = { httpClient, objectToQueryString };

  return {
    mercadoLivreAPI: {
      ...mercadoLivreServiceFactory(dependencies)
    }
  };
}
