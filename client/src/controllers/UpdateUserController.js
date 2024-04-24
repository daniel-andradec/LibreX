import { makeRequest } from '../libs/RequestModule';

const updateUser = async (id, userUpdates) => {
    const response = await makeRequest('PUT', `/users/${id}`, userUpdates);
    return response;
}

const updatePassword = async (id, atual, nova) => {
    const response = await makeRequest('PUT', `/users/updateSenha`, { id, atual, nova });
    return response;
}
export { updateUser, updatePassword };