import React, { Component } from 'react';
import styled from 'styled-components';

class Level extends Component {
  render() {
    const Div = styled.div`
      position: relative;
      width: 100%;
      height: 100%;
      cursor: pointer;
      pointer-events: auto;
      -webkit-transition: opacity 1s, -webkit-transform 1s;
      transition: opacity 1s, transform 1s;
      -webkit-transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
      transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
      -webkit-transform-style: preserve-3d;
      transform-style: preserve-3d;
      &:not(:first-child) {
        position: absolute;
        top: 0;
        left: 0;
      }
      &.level--2 {
        -webkit-transform: translateZ(10vmin);
        transform: translateZ(10vmin);
      }
      &.level--3 { -webkit-transform: translateZ(20vmin);
        transform: translateZ(20vmin);
      }

      &.level--4 {
        -webkit-transform: translateZ(30vmin);
        transform: translateZ(30vmin);
      }
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
    return (
      <Div className={`level level--${this.props.level.id}`}>
        <Svg version="1.1" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 500" x="0px" y="0px" xmlSpace="preserve">
          <Polygon class="st0" fill={this.props.level.color} points={this.props.level.points} />
        </Svg>
      </Div>
    );
  }
};

export default Level;
