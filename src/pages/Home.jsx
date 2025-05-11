import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container text-center mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <img
            src="https://th.bing.com/th/id/R.1eff4a8c0ff9365d42f5589be2d8a9b4?rik=j0fYdhYp216yQg&pid=ImgRaw&r=0"
            className="img-fluid mb-4"
            style={{ maxWidth: '400px' }}
          />
          <h1 className="display-4 text-success mb-3">¡Bienvenido a Proyecto  FIFAS!</h1>
          <p className="lead text-muted mb-4">
            Podras conocer a tus jugadores FIFAS favoritos y conocer sus estadisticas
          </p>
          <Link to="/players" className="btn btn-lg btn-primary px-5 py-3 rounded-pill shadow">
            Ver Jugadores
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
