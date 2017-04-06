import { connect } from 'react-redux';
import {  selectZone,
          selectLevel,
          selectNamingOp } from '../actions/map-actions';
import AsideComponent from '../components/aside-component';

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

const AsideContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AsideComponent);

export default AsideContainer;
