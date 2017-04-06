import { connect } from 'react-redux';
import {  initializeApp,
          selectZone,
          selectLevel } from '../actions/map-actions';
import Content from '../components/content';

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

const ContentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);

export default ContentContainer;
