import { zones } from '../data/areas';
import {
  INIT_APP,
  SELECT_ZONE,
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


export default mapApp;
