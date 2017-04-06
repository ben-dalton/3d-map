import { connect } from 'react-redux';
import {  selectZone,
          selectLevel,
          selectNamingOp } from '../actions/map-actions';
import MapComponent from '../components/map-component';

const mapStateToProps = (state) => {
  return {
    zones: state.present.zones,
    activeZone: state.present.activeZone,
    activeLevel: state.present.activeLevel,
    activeNamingOp: state.present.activeNamingOp
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectZone: zoneId => {
      dispatch(selectZone(zoneId));
    },
    onSelectLevel: levelId => {
      dispatch(selectLevel(levelId));
    },
    onSelectNamingOp: namingOpId => {
      dispatch(selectNamingOp(namingOpId));
    }
  }
}

const MapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapComponent);

export default MapContainer;
