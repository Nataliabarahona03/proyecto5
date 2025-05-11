import React from 'react';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
  return (
    <ErrorBoundary>
      <div>
        <h1>Aplicación de Fútbol</h1>
        <p>Explora los jugadores de fútbol.</p>
      </div>
    </ErrorBoundary>
  );
};

export default App;
