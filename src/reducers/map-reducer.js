import { zones } from '../data/areas';
import undoable from 'redux-undo';
import {
  SELECT_ZONE,
  SELECT_LEVEL,
  SELECT_NAMING_OP,
  CLOSE_NAMING_OP,
  UPDATE_NAMING_OPS,
  RESET_MAP
} from '../actions/action-types';

// need to change from depending on ids and finding objects to putting
// objects in state based on ids passed through actions.
const initialState = {
  zones,
  activeZone: null,
  activeLevel: null,
  activeNamingOp: null,
  available_naming_ops: []
}

const getSelectedNamingOp = (state, namingOpId) => {
  const ops = [].concat.apply([], state.available_naming_ops)[0];
  return ops.naming_ops
              .filter(n => n.id === namingOpId)[0];
};

const getSelectedLevel = (state, levelId) => {
  return state.activeZone.levels
              .filter(l => l.id === levelId)[0];
}

const getSelectedZone = (zoneId) => {
  return zones.filter(z => z.id === zoneId)[0];
}

const getAvailableNamingOps = (state) => {
  let available_zones = state.activeZone ? [state.activeZone] : zones;
  let available_naming_ops = available_zones.map(z => {
    if(state.activeLevel) {
      return {
        zone_label: z.label,
        naming_ops: state.activeLevel.naming_ops.map(n => {
          return {
            ...n,
            level_label: state.activeLevel.label
          }
        })
      }
    } else {
      return {
        zone_label: z.label,
        naming_ops: [].concat.apply([], z.levels.map(l => {
          return l.naming_ops.map(n => {
            return {
              ...n,
              level_label: l.label
            };
          })
        }))
      }
    }
  });
  return available_naming_ops;
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
    case CLOSE_NAMING_OP:
      return {
        ...state,
        activeNamingOp: null
      }
    case UPDATE_NAMING_OPS:
      return {
        ...state,
        available_naming_ops: getAvailableNamingOps(state)
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
