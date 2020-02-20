import React, { useEffect, useState } from 'react';

import { api } from './services/api';

import './global.css';
import './App.css';
import './Main.css';
import './Sidebar.css';

function App() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [github, setGithub] = useState('');
  const [techs, setTechs] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (error) => {
        console.log(error);
      },
      { timeout: 30000 }
    );
  }, []);

  const handleAddDev = async (event) => {
    event.preventDefault();

    // const response =
    await api.post('/devs', { github, techs, latitude, longitude });

    setGithub('');
    setTechs('');
  };

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          {/* Github */}
          <div className="input-block">
            <label htmlFor="github">Usuário do Github</label>
            <input
              name="github"
              id="github"
              required
              value={github}
              onChange={(event) => setGithub(event.target.value)}
            />
          </div>
          {/* Techs */}
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input
              name="techs"
              id="techs"
              required
              value={techs}
              onChange={(event) => setTechs(event.target.value)}
            />
          </div>
          {/* Geolocation */}
          <div className="input-group">
            {/* Latitude */}
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                name="latitude"
                id="latitude"
                type="number"
                required
                value={latitude}
                onChange={(event) => setLatitude(event.target.value)}
              />
            </div>
            {/* Longitude */}
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                name="longitude"
                id="longitude"
                type="number"
                required
                value={longitude}
                onChange={(event) => setLongitude(event.target.value)}
              />
            </div>
          </div>
          {/* Submit */}
          <button onClick={handleAddDev}>Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/12416871?s=460&v=4"
                alt="Dev avatar"
              />
              <div className="user-info">
                <strong>Luciano de Cezare</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>
              Muleque bonito Muleque bonito Muleque bonito Muleque bonito Muleque bonito Muleque
              bonito Muleque bonito Muleque bonito Muleque bonito Muleque bonito{' '}
            </p>
            <a href="https://github.com/lucianodecezare">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/12416871?s=460&v=4"
                alt="Dev avatar"
              />
              <div className="user-info">
                <strong>Luciano de Cezare</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Muleque bonito</p>
            <a href="https://github.com/lucianodecezare">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/12416871?s=460&v=4"
                alt="Dev avatar"
              />
              <div className="user-info">
                <strong>Luciano de Cezare</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Muleque bonito</p>
            <a href="https://github.com/lucianodecezare">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/12416871?s=460&v=4"
                alt="Dev avatar"
              />
              <div className="user-info">
                <strong>Luciano de Cezare</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Muleque bonito</p>
            <a href="https://github.com/lucianodecezare">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export { App };
