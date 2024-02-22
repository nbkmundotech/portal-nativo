import React from 'react';
import AuthContext from './AuthContext';
import * as SecureStore from 'expo-secure-store';

export default function AuthContextProvider(props) {
  const [autenticado, setAutenticado] = React.useState(false);
  const [carregando, setCarregando] = React.useState(true);

  const authContext = {
    autenticado,
    carregando,
    async entrar(usuario) {
      // enviaria informacoes de `usuario` para backend de autenticacao, para conferir se esta valido

      const authToken = 'abcdef'; // valor dummy por enquanto, porque nao tem backend real
      await SecureStore.setItemAsync('authToken', authToken);

      setAutenticado(true);
    },
    async sair() {
      await SecureStore.deleteItemAsync('authToken');

      setAutenticado(false);
    }
  };

  React.useEffect(() => {
    ;(async function() {
      try {
        const authToken = await SecureStore.getItemAsync('authToken');

        if (authToken) {
          // supor: token ta valido, sem nenhum problema. (Simplificacao)
          setAutenticado(true);
        }
      } catch (error) {
        // deixa autenticado false.
      }
      setCarregando(false);
    })();
  }, []);

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
}
