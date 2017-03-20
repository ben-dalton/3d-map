import { connect } from 'react-redux';
import { initializeApp } from '../actions/map-actions';
import MapComponent from '../components/map-component';

const mapStateToProps = (state) => {
  return {
    initialized: state.initialized.toString()
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInit: () => {
      dispatch(initializeApp())
    }
  }
}

const MapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapComponent);

export default MapContainer;
