import React, { Component } from 'react';
import styled from 'styled-components';
import { zoneSelectedStyles } from './styles/transform-styles';


class Surroundings extends Component {
  render() {
    const Polygon0 = styled.polygon`
      fill: none;
      stroke: #000000;
      stroke-width: 4.1783;
      stroke-miterlimit: 10;
    `;
    const SVG = styled.svg`
      width: 90vw;
      height: 90vh;
      margin-left: 5vw;
    `;
    return (
      <div className="level" style={this.props.selectedZoneId && zoneSelectedStyles}>
        <SVG version="1.1" viewBox="0 0 677.8 411.4" x="0px" y="0px" xmlSpace="preserve">
          <Polygon0 className="st0" points="173.3,19.6 3.1,19.6 18.8,60.2 48.6,60.2 61.2,94.8 125.8,71.1 196.3,264.3 206.4,264.4 217.5,264.4 221.9,275.9 398.3,275.9 398.3,289.5 460.2,289.5 460.2,401.2 506,400.9 505.7,409.3 615.9,409.3 615.9,391 611.1,391 611.1,382.8 629.9,382.8 629.9,395.3 674.4,395.3 631,310.7 623.9,310.7 623.9,318.4 618.2,318.4 618.2,298 616,298 616,296.5 623.9,292.6 535.7,123.1 513.1,123.1 513.1,73.3 234.4,73.3 234.4,2.7"/>
        </SVG>
      </div>
    );
  }
};

export default Surroundings;
