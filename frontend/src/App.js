import React, { useEffect, useState } from 'react';

import { api } from './services/api';

import { DevItem } from './components/DevItem';
import { DevForm } from './components/DevForm';

import './global.css';
import './App.css';
import './Main.css';
import './Sidebar.css';

function App() {
  const [devs, setDevs] = useState([]);

  // Get Devs
  useEffect(() => {
    const loadDevs = async () => {
      const { data } = await api.get('/devs');

      setDevs(data);
    };

    loadDevs();
  }, []);

  // Create Dev
  const handleAddDev = async (dev) => {
    try {
      const { data } = await api.post('/devs', dev).catch((error) => {
        throw new Error(error);
      });

      setDevs([...devs, data]);
    } catch (error) {
      // TODO: Change alert for a proper notification
      alert(error.message);
    }
  };

  return (
    <div id="app">
      {/* Left Menu */}
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>

      {/* Main List */}
      <main>
        <ul>
          {devs.map((dev) => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export { App };
