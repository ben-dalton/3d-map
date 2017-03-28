import React, { Component } from 'react';
import styled from 'styled-components';

class Header extends Component {
  render() {
    const Title = styled.h1`
      font-size: 65px;
    `;
    const Link = styled.a`
      cursor: pointer;
    `;
    return (
      <div>
        <div className="logo">
          <Link onClick={() => this.props.onResetMap()}>
            <img className="animated fadeInLeft " src="http://d81ldo19jx3e0.cloudfront.net/northwestern/img/wf-logo-sm.png" alt="" />
          </Link>
        </div>
        <Title className="text-center">Facility Map</Title>
      </div>
    );
  }
}

export default Header;
