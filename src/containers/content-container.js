import { connect } from 'react-redux';
import { closeNamingOp } from '../actions/map-actions';
import Content from '../components/content';

const mapStateToProps = (state) => {
  return {
    activeNamingOp: state.present.activeNamingOp
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCloseNamingOp: () => {
      dispatch(closeNamingOp());
    }
  }
}

const ContentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);

export default ContentContainer;
