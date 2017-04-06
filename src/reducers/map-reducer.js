import { zones } from '../data/areas';
import undoable from 'redux-undo';
import {
  INIT_APP,
  SELECT_ZONE,
  SELECT_LEVEL,
  RESET_MAP
} from '../actions/action-types';

const initialState = {
  initialized: false,
  selectedZoneId: null,
  selectedLevelId: null,
  activeLevels: [],
  zones
}

const getSelectedZoneLevels = (zoneId) => {
  const zone = zones.filter(z => z.id === zoneId)[0];
  return zone.levels;
}

// const getSelectedLevel = (state, levelId) => {
//   const level = getSelectedZoneLevels(state.selectedZoneId)
//     .filter(l => l.id === levelId);
//   return level;
// }

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
    case SELECT_ZONE:
      return {
        ...state,
        selectedZoneId: action.zoneId,
        activeLevels: getSelectedZoneLevels(action.zoneId)
      }
    case SELECT_LEVEL:
      return {
        ...state,
        selectedLevelId: action.levelId
      }
    case RESET_MAP:
      return {
        ...state,
        selectedZoneId: null,
        selectedLevelId: null,
        activeLevels: [],
      }
    default:
      return state;
  }
}

const undoableMapApp = undoable(mapApp);

export default undoableMapApp;
