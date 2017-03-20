import React, { Component } from 'react';
import MapContainer from './containers/map-container';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css/animate.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import mapApp from './reducers/map-reducer';

let store = createStore(
  mapApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <MapContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
