import { connect } from 'react-redux';
import {  selectZone,
          selectLevel,
          listSelectNamingOp } from '../actions/map-actions';
import AsideComponent from '../components/aside-component';

const mapStateToProps = (state) => {
  return {
    zones: state.present.zones,
    activeZone: state.present.activeZone,
    activeLevel: state.present.activeLevel,
    activeNamingOp: state.present.activeNamingOp,
    available_naming_ops: state.present.available_naming_ops
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
    onSelectNamingOp: (zoneId, levelId, namingOpId) => {
      dispatch(listSelectNamingOp(zoneId, levelId, namingOpId));
    }
  }
}

const AsideContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AsideComponent);

export default AsideContainer;
