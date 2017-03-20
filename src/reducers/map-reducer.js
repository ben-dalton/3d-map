import {
  INIT_APP
} from '../actions/action-types';

const initialState = {
  initialized: false
}

function mapApp(state = initialState, action) {
  switch (action.type) {
    case INIT_APP:
      if (state.initialized) {
        return state;
      } else {
        return {
          ...state,
          initialized: true
        }
      }
    default:
      return state;
  }
}

export default mapApp;
