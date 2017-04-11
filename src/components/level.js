import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styled from 'styled-components';
import './styles/transitions.css';

class Level extends Component {
  render() {
    const Svg = styled.svg`
      width: 50vw;
      height: 59vh;
      max-width: 100%;
      max-height: 100%;
    `;
    const Polygon = styled.polygon`
      fill: ${props => props.fill};
      stroke-width: 4.1783;
      stroke-linecap: square;
      stroke-miterlimit: 10;
      &:hover {
        stroke: #666;
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
        <Svg version="1.1" preserveAspectRatio="xMidYMid meet" viewBox="10 -10 200 300" xmlSpace="preserve">
          <Polygon className={`map__outline ${this.props.activeLevel && 'level-selected'}`} fill={this.props.level.color} points={this.props.level.points} />
          {this.props.activeLevel && this.props.level.naming_ops && this.props.level.naming_ops.map(n => {
            if (n.svgElement === 'rect') {
              return (
                <rect
                  onClick={() => this.props.onSelectNamingOp(n.id)}
                  onMouseEnter={() => this.props.onPreviewNamingOp(n.title)}
                  onMouseLeave={() => this.props.onClearPreview()}
                  key={n.id}
                  x={n.x}
                  y={n.y}
                  width={n.width}
                  height={n.height}
                  style={{ fill: this.props.level.color, stroke: n.color, strokeWidth: 1, strokeMiterlimit: 10}}
                />
              );
            } else if (n.svgElement === 'polygon') {
              return (
                <polygon
                  onClick={() => this.props.onSelectNamingOp(n.id)}
                  onMouseEnter={() => this.props.onPreviewNamingOp(n.title)}
                  onMouseLeave={() => this.props.onClearPreview()}
                  key={n.id}
                  points={n.points}
                  style={{ fill: this.props.level.color, stroke: n.color, strokeWidth: 1, strokeMiterlimit: 10}}
                />
              );
            } else { return <div></div> }
          })}
        </Svg>
      </ReactCSSTransitionGroup>
    );
  }
};

export default Level;
