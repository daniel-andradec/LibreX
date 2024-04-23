import { makeRequest } from '../libs/RequestModule';

const performSale = async (idLivro, idVendedor, idComprador) => {
    const response = (await makeRequest('POST', '/sales', { idLivro, idVendedor, idComprador }))
    return response
}


export { performSale }