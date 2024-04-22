import { makeRequest } from '../libs/RequestModule';
import store from '@/store/index.js'

const getUserBooks = async (id) => {
    // gets the logged in user
    const response = (await makeRequest('GET', `/users/${id}/books`))
    return response
}

const addUserBook = async (formData) => {
    // gets the logged in user
    console.log(formData)
    const response = (await makeRequest('POST', `/books`, formData, true))
    console.log(response)
    return response
}

export { getUserBooks, addUserBook }