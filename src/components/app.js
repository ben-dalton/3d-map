import React from 'react';
import Header from './header';
import MapContainer from '../containers/map-container';

const App = () => (
  <div className="container">
    <div className="main">
      <Header />
      <MapContainer />
    </div>
  </div>
);

export default App;
