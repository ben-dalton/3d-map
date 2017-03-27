import { connect } from 'react-redux';
import { initializeApp, selectZone } from '../actions/map-actions';
import MapComponent from '../components/map-component';

const mapStateToProps = (state) => {
  return {
    initialized: state.initialized,
    selectedZoneId: state.selectedZoneId,
    activeLevels: state.activeLevels,
    zones: state.zones
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInit: () => {
      dispatch(initializeApp())
    },
    onSelectZone: zoneId => {
      dispatch(selectZone(zoneId))
    }
  }
}

const MapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapComponent);

export default MapContainer;
