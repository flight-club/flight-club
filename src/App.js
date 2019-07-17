import React from 'react';
import './_app.scss';
import './reset.css';
import routes from './routes';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <main>
      < Nav />
      {routes}
    </main>
  );
}

export default App;
