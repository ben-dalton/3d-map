import React, { Component } from 'react';
import styled from 'styled-components';

class Breadcrumbs extends Component {
  render() {
    const Subtitle = styled.div`
      text-align: center;
    `;
    return (
      <Subtitle>
        {this.props.activeZone && 
          <button className="btn btn-default" onClick={() => this.props.onClearSelection()}>
            <div className="glyphicon glyphicon-chevron-left"></div>
          </button>
        }
        &nbsp;&nbsp;
        {this.props.activeZone && this.props.activeZone.label} 
        {this.props.activeLevel && ` |  ${this.props.activeLevel.label}`}
      </Subtitle>
    );
  }
}

export default Breadcrumbs;
