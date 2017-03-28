import React from 'react';
import HeaderContainer from '../containers/header-container';
import MapContainer from '../containers/map-container';

const App = () => (
  <div className="container">
    <div className="main">
      <HeaderContainer />
      <MapContainer />
    </div>
  </div>
);

export default App;
