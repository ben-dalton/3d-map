import { connect } from 'react-redux';
import { resetMap } from '../actions/map-actions';
import Header from '../components/header';

const mapDispatchToProps = (dispatch) => {
  return {
    onResetMap: () => {
      dispatch(resetMap())
    }
  }
}

const HeaderContainer = connect(
  null,
  mapDispatchToProps
)(Header);

export default HeaderContainer;
