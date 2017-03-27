import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
`;

const Svg = styled.svg`
  width: 90vw;
  height: 90vh;
  margin-left: 5vw;
`;
const Polygon = styled.polygon`
  fill: ${props => props.fill};
  stroke: #000000;
  stroke-width: 4.1783;
  stroke-linecap: square;
  stroke-miterlimit: 10;
  &:hover {
    fill: #666;
    cursor: pointer;
`;

const Level = ({level}) => {
  return (
    <Div className={`level level--${level.id} animated fadeIn`}>
      <Svg version="1.1" viewBox="0 0 677.8 411.4" x="0px" y="0px" xmlSpace="preserve">
        <Polygon class="st0" fill={level.color} points={level.points} />
      </Svg>
    </Div>
  );
};

export default Level;
