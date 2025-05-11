import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log('Error capturado:', error, info);
  }

  render() {
    if (this.state.hasError) {
      // Este es el error comentado para que no afecte la página
      return <h1>Ups, algo salió mal</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
