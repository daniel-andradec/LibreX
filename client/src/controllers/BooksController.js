import { makeRequest } from '../libs/RequestModule';

const getAllBooks = async () => {
   
    const response = (await makeRequest('GET', '/books'))
    return response
}

export { getAllBooks }