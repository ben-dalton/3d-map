import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styled from 'styled-components';
import './styles/transitions.css';

class Level extends Component {
  render() {
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
      <ReactCSSTransitionGroup
        transitionName="level"
        transitionEnter={false}
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionLeave={true}
        transitionLeaveTimeout={500}
        component="div"
        className={`level level--${this.props.level.id}
          ${this.props.level.id === this.props.selectedLevelId ? 'level--current' : ''}`}
        onClick={() => this.props.onSelectLevel(this.props.level.id)}
      >
        <Svg version="1.1" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 500" x="0px" y="0px" xmlSpace="preserve">
          <Polygon class="st0" fill={this.props.level.color} points={this.props.level.points} />
        </Svg>
      </ReactCSSTransitionGroup>
    );
  }
};

export default Level;
