import {
  SELECT_ZONE,
  SELECT_LEVEL,
  SELECT_NAMING_OP,
  CLOSE_NAMING_OP,
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
