import { makeRequest } from '../libs/RequestModule';

const getBook = async (id) => {
    const response = (await makeRequest('GET', `/books/${id}`))
    return response
}

const getVendor = async (id) => {
    const response = (await makeRequest('GET', `/users/${id}`))
    return response
}

export { getBook, getVendor }