import React from 'react';
import HeaderContainer from '../containers/header-container';
import MapContainer from '../containers/map-container';
import AsideContainer from '../containers/aside-container';
import ConnectedUndoRedo from '../containers/undo-redo';
import ContentContainer from '../containers/content-container';

const App = () => (
  <div className="container">
    <div className="main">
      <HeaderContainer />
      <br />
      <ConnectedUndoRedo />
      <MapContainer />
      <ContentContainer />
    </div>
    <AsideContainer />
  </div>
);

export default App;
