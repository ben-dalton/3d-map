import React, { Component } from 'react';

class MapComponent extends Component {
  componentWillMount() {
    this.props.onInit();
  }
  componentDidUpdate() {
    console.log(`initialized: ${this.props.initialized}`)
  }
  render() {
    return (
      <div className="container">
        <div className="main">
          <div className="logo">
            <a href="index.html">
              <img className="animated fadeInLeft " src="http://d81ldo19jx3e0.cloudfront.net/northwestern/img/wf-logo-sm.png" alt="" />
            </a>
          </div>
          <div className="mall">
            <h1 className="text-center">Facility Map</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default MapComponent;
