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
} from './action-types';
import { store } from '../index';

export function selectZone(zoneId) {
  return {
    type: SELECT_ZONE,
    zoneId
  }
}

export function selectLevel(levelId) {
  return {
    type: SELECT_LEVEL,
    levelId
  }
}

export function resetMap() {
  return {
    type: RESET_MAP
  }
}

export function listSelectNamingOp(zoneId, levelId, namingOpId) {
  return {
    type: LIST_SELECT_NAMING_OP,
    payload: {
      zoneId,
      levelId,
      namingOpId
    }
  }
}

export function mapSelectNamingOp(namingOpId) {
  return {
    type: MAP_SELECT_NAMING_OP,
    namingOpId
  }
}

export function closeNamingOp() {
  return {
    type: CLOSE_NAMING_OP
  }
}

export function updateNamingOps() {
  return {
    type: UPDATE_NAMING_OPS
  }
}

export function previewNamingOp(title) {
  return {
    type: PREVIEW_NAMING_OP,
    title
  }
}

export function clearPreview() {
  return {
    type: CLEAR_PREVIEW
  }
}

export function clearSelection() {
  const { activeZone, activeLevel, activeNamingOp } = store.getState().present;
  if (activeNamingOp) {
    return {
      type: CLEAR_NAMING_OP_SELECTION,
    }
  }
  if (activeLevel) {
    return {
      type: CLEAR_LEVEL_SELECTION
    }
  }
  if (activeZone) {
    return {
      type: CLEAR_ZONE_SELECTION
    }
  }
}
