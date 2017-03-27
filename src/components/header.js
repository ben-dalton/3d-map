import React, { Component } from 'react';
import styled from 'styled-components';

class MapComponent extends Component {
  render() {
    const Title = styled.h1`
      font-size: 65px;
    `;
    return (
      <div>
        <div className="logo">
          <a href="index.html">
            <img className="animated fadeInLeft " src="http://d81ldo19jx3e0.cloudfront.net/northwestern/img/wf-logo-sm.png" alt="" />
          </a>
        </div>
        <Title className="text-center">Facility Map</Title>
      </div>
    );
  }
}

export default MapComponent;
