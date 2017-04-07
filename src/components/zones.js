import React, { Component } from 'react';
import styled from 'styled-components';
import './styles/transitions.css';

class Zones extends Component {
  render() {
    const SVG = styled.svg`
      width: 90vw;
      height: 90vh;
      margin-left: 5vw;
    `;
    const Zone1 = styled.polygon`
      fill: ${props => props.activeZone ? 'none' : '#ef9c00'};
      stroke: #999;
      stroke-width: 4.1783;
      stroke-linecap: square;
      stroke-miterlimit: 10;
      pointer-events: auto;
      &:hover {
        stroke: #777;
        cursor: pointer;
      }
    `;
    return (
      <SVG version='1.1' viewBox='0 0 800 600' x='0px' y='0px' xmlSpace='preserve'>
        <a onClick={() => this.props.onSelectZone(1)}>
          <Zone1 points='460.2,401.2 506,400.9 505.7,409.3 615.9,409.3 615.9,391 611.1,391 611.1,382.8 629.9,382.8 629.9,395.3 674.4,395.3 631,310.7 623.9,310.7 623.9,318.4 618.2,318.4 618.2,298 616,298 616,296.5 623.9,292.6 535.7,123.1 460.2,123.1 '/>
        </a>
      </SVG>
    );
  }
}

export default Zones;
