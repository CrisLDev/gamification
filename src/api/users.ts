import { api } from ".";

interface Login {
  email: string,
  avatar?: string,
  userName?: string,
}

export const LoginAccess = async (option: { data: Login }) => {
    // api.defaults.headers['access-token'] = option.token;
    const response = await api({
      method: 'POST',
      url: '/users/login',
      data: option.data,
    });
    return response;
  };

  export const GetMeUser = async (options: { token: string }) => {
    api.defaults.headers['access-token'] = options.token;
    const response = await api({
      method: 'GET',
      url: '/users/me',
    });
    return response;
  };