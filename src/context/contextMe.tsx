import React from 'react';
import Cookies from 'js-cookie';
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

interface Me {
  idUser: string;
  avatar: string;
  userName: string;
  email: string;
}

interface Props {
  children: ReactNode;
}

interface Values {
  token: string;
  me: Me;
  setMe: Dispatch<SetStateAction<Me>>;
}

export const MeContext = createContext<Values>({
  token: '',
  me: {
    idUser: '',
    userName: '',
    email: '',
    avatar: '',
  },
  setMe: () => false,
});

export const MeContextProvider = ({ children }: Props) => {
  const [token] = useState<string>(Cookies.get('access-token-grama') || '');
  const [me, setMe] = useState<Me>({
    idUser: '',
    userName: '',
    email: '',
    avatar: '',
  });

  const Values: Values = {
    token,
    me,
    setMe,
  };

  return <MeContext.Provider value={Values}>{children}</MeContext.Provider>;
};