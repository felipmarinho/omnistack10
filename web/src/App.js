import React, { useEffect, useState } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './components/DevItem';
import DevForm from './components/DevForm';


// Conceitos principias do react:
// Componente   -> Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação. Criamos um novo componente quando estamos repetindo o código (3x ou mais), Isolar um trecho um pedaço da nossa aplicação que não infrinja nenhuma RN de outro componente. Primeira letra sempre maiuscula.
// Propriedade  -> Informações que um componente PAI passa pra o componente Filho. São os atributos do HTML no caso do React <Header background-color:#...)
// Estado       -> Informações mantidas pelo componente (Lembrar: imutabilidade)


function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');
      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const response = await api.post('/devs', data);
    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev}/>
      </aside>
      <main>
        <ul>
          {
            devs.map(dev => (
              <DevItem dev={dev} key={dev._id}/>
            ))
          }

        </ul>
      </main>
    </div>
  );
}

export default App;
