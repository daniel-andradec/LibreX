import { makeRequest } from '../libs/RequestModule';

const updateUser = async (id, userUpdates) => {
    const response = await makeRequest('PUT', `/users/${id}`, userUpdates);
    return response;
}

export { updateUser };