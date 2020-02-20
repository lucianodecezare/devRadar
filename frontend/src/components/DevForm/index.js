import React, { useEffect, useState } from 'react';

import './styles.css';

function DevForm({ onSubmit }) {
  const [github, setGithub] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [techs, setTechs] = useState('');

  // Get browser geolocation
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (error) => {
        alert.log(error.message);
      },
      { timeout: 30000 }
    );
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    await onSubmit({ github, techs, latitude, longitude });

    setGithub('');
    setTechs('');
  }

  return (
    // Form
    <form>
      {/* Github */}
      <div className="input-block">
        <label htmlFor="github">Usuário do Github</label>
        <input
          id="github"
          name="github"
          required
          value={github}
          onChange={(event) => setGithub(event.target.value)}
        />
      </div>
      {/* Techs */}
      <div className="input-block">
        <label htmlFor="techs">Tecnologias</label>
        <input
          id="techs"
          name="techs"
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
            id="latitude"
            name="latitude"
            required
            type="number"
            value={latitude}
            onChange={(event) => setLatitude(event.target.value)}
          />
        </div>
        {/* Longitude */}
        <div className="input-block">
          <label htmlFor="longitude">Longitude</label>
          <input
            id="longitude"
            name="longitude"
            type="number"
            required
            value={longitude}
            onChange={(event) => setLongitude(event.target.value)}
          />
        </div>
      </div>
      {/* Submit */}
      <button type="submit" onClick={handleSubmit}>
        Salvar
      </button>
    </form>
  );
}

export { DevForm };
