import React, { Component } from 'react';
import Footprint from './footprint';
import Level from './level';
import './styles/transitions.css';

class MapComponent extends Component {
  componentWillMount() {
    document.body.className = 'animated fadeIn';
    this.props.onUpdateNamingOps();
  }
  componentDidUpdate() {
    this.props.onUpdateNamingOps();
  }
  render() {
    return (
      <div className={`mall ${this.props.activeNamingOp && 'mall--content-open'}`}>
        <Footprint
          activeZone={this.props.activeZone}
          onSelectZone={this.props.onSelectZone}
        />
        <div
          className={this.props.activeLevel ? `levels levels--open levels--selected-${this.props.activeLevel.id}` : 'levels'}>
          {this.props.activeZone && this.props.activeZone.levels.map(l => {
            return <Level
                      activeZone={this.props.activeZone}
                      onSelectLevel={this.props.onSelectLevel}
                      onSelectNamingOp={this.props.onSelectNamingOp}
                      activeLevel={this.props.activeLevel}
                      key={l.id || 1010101}
                      level={l}
                    />
            }
          )}
        </div>
      </div>
    );
  }
}

export default MapComponent;
