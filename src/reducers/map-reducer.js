import { zones } from '../data/areas';
import undoable from 'redux-undo';
import {
  SELECT_ZONE,
  SELECT_LEVEL,
  MAP_SELECT_NAMING_OP,
  LIST_SELECT_NAMING_OP,
  CLOSE_NAMING_OP,
  UPDATE_NAMING_OPS,
  PREVIEW_NAMING_OP,
  CLEAR_PREVIEW,
  CLEAR_NAMING_OP_SELECTION,
  CLEAR_LEVEL_SELECTION,
  CLEAR_ZONE_SELECTION,
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

const getZoneFromId = (zoneId) => {
  return zones.filter(z => zoneId === z.id)[0];
};

const getLevelFromIds = (zoneId, levelId) => {
  const activeZone = getZoneFromId(zoneId);
  return activeZone.levels.filter(l => l.id === levelId)[0];
};

const getSelectedLevel = (state, levelId) => {
  return state.activeZone.levels
              .filter(l => l.id === levelId)[0];
};

const getSelectedZone = (zoneId) => {
  return zones.filter(z => z.id === zoneId)[0];
};

const getAvailableNamingOps = (state) => {
  let available_zones = state.activeZone ? [state.activeZone] : zones;
  let available_naming_ops = available_zones.map(z => {
    if(state.activeLevel) {
      return {
        zone_label: z.label,
        zone_id: z.id,
        naming_ops: state.activeLevel.naming_ops.map(n => {
          return {
            ...n,
            level_label: state.activeLevel.label,
            level_id: state.activeLevel.id
          }
        })
      }
    } else {
      return {
        zone_label: z.label,
        zone_id: z.id,
        naming_ops: [].concat.apply([], z.levels.map(l => {
          return l.naming_ops.map(n => {
            return {
              ...n,
              level_label: l.label,
              level_id: l.id
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
    case MAP_SELECT_NAMING_OP:
      return {
        ...state,
        activeNamingOp: getSelectedNamingOp(state, action.namingOpId)
      }
    case LIST_SELECT_NAMING_OP:
      return {
        ...state,
        activeZone: state.activeZone || getZoneFromId(action.payload.zoneId),
        activeLevel: state.activeLevel || getLevelFromIds(action.payload.zoneId, action.payload.levelId),
        activeNamingOp: getSelectedNamingOp(state, action.payload.namingOpId)
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
    case PREVIEW_NAMING_OP:
      return {
        ...state,
        previewTitle: action.title
      }
    case CLEAR_PREVIEW:
      return {
        ...state,
        previewTitle: null
      }
    case CLEAR_NAMING_OP_SELECTION:
      return {
        ...state,
        activeNamingOp: null
      }
    case CLEAR_LEVEL_SELECTION:
      return {
        ...state,
        activeLevel: null
      }
    case CLEAR_ZONE_SELECTION:
      return {
        ...state,
        activeZone: null
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
