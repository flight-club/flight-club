import React from 'react';
import './_app.scss';
import './reset.css';
import routes from './routes';
import Nav from './components/Nav/Nav';
import Book from './components/Nav/Book/Book';

function App() {
  return (
    <main>
      < Nav />
      < Book />
      {routes}
    </main>
  );
}

export default App;
