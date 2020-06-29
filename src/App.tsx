import React from 'react';
import './App.css';
import Routes from './routes';
import Header from './shared/components/header/header';

function App() {
  return (
    <div>
      <Header />
      <Routes />
    </div>
  );
}

export default App;
