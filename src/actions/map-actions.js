import {
  INIT_APP,
  SELECT_ZONE,
  SELECT_LEVEL,
  RESET_MAP
} from './action-types';

export function initializeApp() {
  return {
    type: INIT_APP
  }
}

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
