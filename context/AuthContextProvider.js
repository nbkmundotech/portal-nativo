import React from 'react';
import AuthContext from './AuthContext';

export default function AuthContextProvider(props) {
  const [autenticado, setAutenticado] = React.useState(false);

  const authContext = {
    autenticado,
    entrar() {
      setAutenticado(true);
    },
  };

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
}
