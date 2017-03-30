import { connect } from 'react-redux';
import {  initializeApp,
          selectZone,
          selectLevel } from '../actions/map-actions';
import MapComponent from '../components/map-component';

const mapStateToProps = (state) => {
  return {
    initialized: state.initialized,
    selectedZoneId: state.selectedZoneId,
    selectedLevelId: state.selectedLevelId,
    activeLevels: state.activeLevels,
    zones: state.zones
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInit: () => {
      dispatch(initializeApp());
    },
    onSelectZone: zoneId => {
      dispatch(selectZone(zoneId));
    },
    onSelectLevel: levelId => {
      dispatch(selectLevel(levelId));
    }
  }
}

const MapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapComponent);

export default MapContainer;
