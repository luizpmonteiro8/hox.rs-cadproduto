import { httpClient } from '../http';
import { User } from '../models/user';
import axios, { AxiosResponse } from 'axios';

const resourceURL = '/users';

export const useUserService = () => {
  const save = async (user: User): Promise<User> => {
    const url = process.env.BASEURL + resourceURL;

    const response: AxiosResponse<User> = await axios.post<User>(url, user);
    return response.data;
  };

  const update = async (user: User): Promise<void> => {
    const url = '${resourceURL}/${user.id}';
    await httpClient.patch<User>(url, user);
  };

  const deleteUser = async (id): Promise<void> => {
    const url = `${resourceURL}/${id}`;
    await httpClient.delete(url);
  };

  const loadUser = async (id): Promise<User> => {
    const url = `${resourceURL}/${id}`;
    const response: AxiosResponse<User> = await httpClient.get(url);
    return response.data;
  };

  const forgotPassword = async (emailDTO: string): Promise<void> => {
    const url = process.env.BASEURL + `/auth/forgot`;
    await axios.post(url, emailDTO);
  };

  return {
    save,
    update,
    loadUser,
    deleteUser,
    forgotPassword,
  };
};
