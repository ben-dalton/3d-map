import {
  SELECT_ZONE,
  SELECT_LEVEL,
  SELECT_NAMING_OP,
  CLOSE_NAMING_OP,
  UPDATE_NAMING_OPS,
  PREVIEW_NAMING_OP,
  CLEAR_PREVIEW,
  RESET_MAP
} from './action-types';

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

export function selectNamingOp(namingOpId) {
  return {
    type: SELECT_NAMING_OP,
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
