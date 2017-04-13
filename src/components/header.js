import React, { Component } from 'react';
import styled from 'styled-components';
import BreadcrumbsContainer from '../containers/breadcrumbs-container.js';

class Header extends Component {
  render() {
    const Title = styled.h1`
      font-size: 65px;
      text-align: center;
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
        <Title>Facility Map</Title>
        <BreadcrumbsContainer />
      </div>
    );
  }
}

export default Header;
