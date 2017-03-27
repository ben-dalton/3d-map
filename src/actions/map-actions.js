import {
  INIT_APP,
  SELECT_ZONE,
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
