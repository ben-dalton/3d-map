export const FootprintZoneSelected = {
  transform: 'rotateX(70deg) rotateZ(-45deg) translateZ(-15vmin) translateX(-30vmin)',
  transition: 'all 1s',
  opacity: 0
};

export const FootprintNoZone = {
  transform: 'rotateX(0) rotateZ(0) translateZ(0)',
  transition: 'all 1s',
  opacity: 1
};

export const LevelEnter = {
  transform: 'translateZ(10vmin)',
  opacity: 0,
  transition: 'all 1s'
};

export const LevelLeave = {
  opacity: 1,
  transition: 'all 1s'
};
