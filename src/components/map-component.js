import React, { Component } from 'react';
import Footprint from './footprint';
import Level from './level';
import './styles/transitions.css';

class MapComponent extends Component {
  componentWillMount() {
    this.props.onInit();
    document.body.className = 'animated fadeIn';
  }
  render() {
    return (
      <div className="mall">
        <Footprint
          selectedZoneId={this.props.selectedZoneId}
          onSelectZone={this.props.onSelectZone}
        />
        { this.props.selectedZoneId &&
          <div
            className={this.props.selectedLevelId ? `levels levels--open levels--selected-${this.props.selectedLevelId}` : 'levels'}>
            {this.props.selectedZoneId && this.props.activeLevels.map(l => {
              return <Level
                        selectedZoneId={this.props.selectedZoneId}
                        onSelectLevel={this.props.onSelectLevel}
                        selectedLevelId={this.props.selectedLevelId}
                        key={l.id || 1010101}
                        level={l}
                      />
              }
            )}
          </div>
        }
      </div>
    );
  }
}

export default MapComponent;
