import { zones } from '../data/areas';
import undoable from 'redux-undo';
import {
  SELECT_ZONE,
  SELECT_LEVEL,
  SELECT_NAMING_OP,
  RESET_MAP
} from '../actions/action-types';

// need to change from depending on ids and finding objects to putting
// objects in state based on ids passed through actions.
const initialState = {
  zones,
  activeZone: null,
  activeLevel: null,
  activeNamingOp: null
}

const getSelectedNamingOp = (state, namingOpId) => {
  return state.activeLevel.naming_ops
              .filter(n => n.id === namingOpId)[0];
};

const getSelectedLevel = (state, levelId) => {
  return state.activeZone.levels
              .filter(l => l.id === levelId)[0];
}

const getSelectedZone = (zoneId) => {
  return zones.filter(z => z.id === zoneId)[0];
}

function mapApp(state = initialState, action) {
  switch (action.type) {
    case SELECT_ZONE:
      return {
        ...state,
        activeZone: getSelectedZone(action.zoneId)
      }
    case SELECT_LEVEL:
      return {
        ...state,
        activeLevel: getSelectedLevel(state, action.levelId)
      }
    case SELECT_NAMING_OP:
      return {
        ...state,
        activeNamingOp: getSelectedNamingOp(state, action.namingOpId)
      }
    case RESET_MAP:
      return {
        ...state,
        activeZone: null,
        activeLevel: null,
        activeNamingOp: null
      }
    default:
      return state;
  }
}

const undoableMapApp = undoable(mapApp);

export default undoableMapApp;
