import React, { Component } from 'react';
import Surroundings from './surroundings';
import Overview from './overview';
import Level from './level';

class MapComponent extends Component {
  componentWillMount() {
    this.props.onInit();
    document.body.className = 'animated fadeIn';
  }
  render() {
    return (
      <div className="mall">
        <Surroundings
          selectedZoneId={this.props.selectedZoneId}
        />
        <Overview
          selectedZoneId={this.props.selectedZoneId}
          onSelectZone={this.props.onSelectZone} />
        {this.props.selectedZoneId && this.props.activeLevels.map(l => {
            return <Level key={l.id} level={l} />
          }
        )}
      </div>
    );
  }
}

export default MapComponent;
