import { useState, useEffect } from 'react';
import { Header, Game, Footer } from './components';

export function App() {
  return (
    <div className='App'>
      <Header />
      <Game />
      <Footer />
    </div>
  );
}
