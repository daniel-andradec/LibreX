import { makeRequest } from '../libs/RequestModule';
import store from '@/store/index.js'
// const getUser = async () => {
//     // gets the logged in user
//     const response = (await makeRequest('GET', '/users/user'))?.data
//     return response
// }

const getUserBooks = async (id) => {
    // gets the logged in user
    const response = (await makeRequest('GET', `/users/${id}/books`))
    return response
}

export { getUserBooks }