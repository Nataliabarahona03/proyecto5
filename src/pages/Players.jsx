import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const playerNames = [
  'messi', 'ronaldo', 'neymar', 'mbappe', 'haaland',
  'modric', 'kroos', 'lewandowski', 'benzema', 'de bruyne'
];

const Players = () => {
  const [players, setPlayers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const responses = await Promise.all(
          playerNames.map(name =>
            axios.get(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${name}`)
          )
        );
        const data = responses
          .map(res => res.data.player ? res.data.player[0] : null)
          .filter(Boolean);
        setPlayers(data);
        setFiltered(data);
      } catch (err) {
        console.error('Error al obtener jugadores:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchPlayers();
  }, []);

  const handleSearch = () => {
    const result = players.filter(player =>
      player.strPlayer.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFiltered(result);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-primary">Tus jugadores FIFAS</h2>

      {/* Botón de regreso */}
      <div className="mb-4 d-flex justify-content-between align-items-center">
        <button className="btn btn-primary" onClick={() => navigate('/')}>
          ← Volver
        </button>

        
        <div className="input-group w-50">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar jugador..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn btn-outline-primary" onClick={handleSearch}>
            🔍
          </button>
        </div>
      </div>

      {/* Lista de jugadores */}
      {loading ? (
        <p className="text-center">Cargando jugadores...</p>
      ) : (
        <div className="row">
          {filtered.length > 0 ? (
            filtered.map(player => (
              <div key={player.idPlayer} className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src={player.strThumb || 'https://via.placeholder.com/400x300'}
                    className="card-img-top"
                    alt={player.strPlayer}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-primary">{player.strPlayer}</h5>
                    <p className="card-text">
                      <strong>Equipo:</strong> {player.strTeam || 'Desconocido'}<br />
                      <strong>País:</strong> {player.strNationality || 'Desconocido'}<br />
                      <strong>Nacimiento:</strong> {player.dateBorn || 'No disponible'}<br />
                      <strong>Equipos anteriores:</strong> {player.strFormerTeam || 'No disponibles'}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No se encontraron jugadores con ese nombre.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Players;
