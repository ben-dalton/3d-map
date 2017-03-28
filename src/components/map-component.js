import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Surroundings from './surroundings';
import Overview from './overview';
import Level from './level';
import styled from 'styled-components';
import './styles/transitions.css';

class MapComponent extends Component {
  componentWillMount() {
    this.props.onInit();
    document.body.className = 'animated fadeIn';
  }
  render() {
    const Levels = styled(ReactCSSTransitionGroup)`
      position: absolute;
      top: 50%;
      left: 50%;
      width: 96vmin;
      height: 64vmin;
      margin: -32vmin 0 0 -48vmin;
      -webkit-transition: -webkit-transform 0.3s;
      transition: transform 0.3s;
      -webkit-transform-style: preserve-3d;
      transform-style: preserve-3d;
      -webkit-transform: rotateX(70deg) rotateZ(-45deg) translateZ(-15vmin);
      transform: rotateX(70deg) rotateZ(-45deg) translateZ(-15vmin);
    `;
    return (
      <div className="mall">
        <Surroundings
          selectedZoneId={this.props.selectedZoneId}
        />
        <Overview
          selectedZoneId={this.props.selectedZoneId}
          onSelectZone={this.props.onSelectZone} />
        <Levels
          transitionName='animate-levels'
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          component='div'
          className='levels'>
          {this.props.selectedZoneId && this.props.activeLevels.map(l => {
              return <Level key={l.id} level={l} />
            }
          )}
        </Levels>
      </div>
    );
  }
}

export default MapComponent;
