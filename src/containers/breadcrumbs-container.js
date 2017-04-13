import { connect } from 'react-redux';
import { clearSelection } from '../actions/map-actions';
import Breadcrumbs from '../components/breadcrumbs';

const mapDispatchToProps = (dispatch) => {
  return {
    onClearSelection: () => {
      dispatch(clearSelection())
    }
  }
}

const mapStateToProps = (state) => {
  return {
    activeZone: state.present.activeZone,
    activeLevel: state.present.activeLevel,
    activeNamingOp: state.present.activeNamingOp
  };
}

const BreadcrumbsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Breadcrumbs);

export default BreadcrumbsContainer;
