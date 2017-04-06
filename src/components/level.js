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
      }
      &.level-selected:hover {
        fill: ${props => props.fill};
        cursor: normal;
      }
    `;
    return (
      <ReactCSSTransitionGroup
        transitionName="level"
        transitionEnter={false}
        transitionAppear={true}
        transitionAppearTimeout={1500}
        transitionLeave={true}
        transitionLeaveTimeout={1500}
        component="div"
        className={`level level--${this.props.level.id}
          ${this.props.activeLevel && (this.props.level.id === this.props.activeLevel.id) ? 'level--current' : 'level--no-current'}`}
        onClick={!this.props.activeLevel ? () => this.props.onSelectLevel(this.props.level.id) : ''}
      >
        <Svg version="1.1" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 500" x="0px" y="0px" xmlSpace="preserve">
          <Polygon className={this.props.activeLevel && 'level-selected'} fill={this.props.level.color} points={this.props.level.points} />
          {this.props.activeLevel && this.props.level.naming_ops && this.props.level.naming_ops.map(n => {
            if (n.svgElement === 'rect') {
              return (
                <rect
                  key={n.id}
                  x={n.x}
                  y={n.y}
                  width={n.width}
                  height={n.height}
                  style={{ fill: 'none', stroke: n.color, strokeWidth: 1, strokeMiterlimit: 10}}
                />
              );
            } else if (n.svgElement === 'polygon') {
              return (
                <polygon
                  key={n.id}
                  points={n.points}
                  style={{ fill: 'none', stroke: n.color, strokeWidth: 1, strokeMiterlimit: 10}}
                />
              );
            } else {return <div></div>}
          })}
        </Svg>
      </ReactCSSTransitionGroup>
    );
  }
};

export default Level;
