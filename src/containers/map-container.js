import { connect } from 'react-redux';
import {  initializeApp,
          selectZone,
          selectLevel } from '../actions/map-actions';
import MapComponent from '../components/map-component';

const mapStateToProps = (state) => {
  return {
    initialized: state.present.initialized,
    selectedZoneId: state.present.selectedZoneId,
    selectedLevelId: state.present.selectedLevelId,
    activeLevels: state.present.activeLevels,
    zones: state.present.zones
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
