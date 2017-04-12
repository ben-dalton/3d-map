import React, { Component } from 'react';
import Footprint from './footprint';
import Level from './level';
import './styles/transitions.css';
import styled from 'styled-components';

class MapComponent extends Component {
  componentWillMount() {
    document.body.className = 'animated fadeIn';
    this.props.onUpdateNamingOps();
  }
  render() {
    const Preview = styled.div`
      position: fixed;
      text-align: center;
      bottom: 30vh;
      font-size: 30px;
      width: 100%;
    `;
    return (
      <div className={`mall ${this.props.activeNamingOp && 'mall--content-open'}`}>
        <Footprint
          activeZone={this.props.activeZone}
          onSelectZone={this.props.onSelectZone}
        />
        <div
          className={this.props.activeLevel ? `levels levels--open levels--selected-${this.props.activeLevel.id}` : 'levels'}>
          { this.props.activeZone && this.props.activeZone.levels.map(l => {
            return  <Level
                      activeZone={this.props.activeZone}
                      onSelectLevel={this.props.onSelectLevel}
                      onSelectNamingOp={this.props.onSelectNamingOp}
                      activeLevel={this.props.activeLevel}
                      activeNamingOp={this.props.activeNamingOp}
                      key={l.id || 1010101}
                      level={l}
                      onPreviewNamingOp={this.props.onPreviewNamingOp}
                      onClearPreview={this.props.onClearPreview}
                    />
            }
          )}
        </div>
        <Preview className="preview-title">{this.props.previewTitle}</Preview>
      </div>
    );
  }
}

export default MapComponent;
