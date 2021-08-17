import { api } from ".";

export const LoginAccess = async (option: { email: string }) => {
    // api.defaults.headers['access-token'] = option.token;
    const response = await api({
      method: 'POST',
      url: '/users/login',
      data: {
        email: option.email,
      },
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