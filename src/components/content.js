import React, { Component } from 'react';

class Content extends Component {
  render() {
    return (
      <div className={`content ${this.props.current_naming_op && 'content--open'}`}>
        <div className="content__item">
          <h3 className="content__item-title">Apple Heart</h3>
          <div className="content__item-details">
            <p className="content__meta">
              <span className="content__meta-item"><strong>Opening Hours:</strong> 6:30AM — 11:30PM</span> 
              <span className="content__meta-item"><strong>Phone:</strong> (0) 66 5738902</span>
            </p>
            <p className="content__desc">Burdock celery - salsify, tomatillo. Bitter gourd horseradish leaves radicchio, celeriac miner's lettuce kurrat arugula fluted pumpkin turnip, arracacha water spinach nopal.</p>
          </div>
        </div>
        <button className="boxbutton boxbutton--dark content__button">
          <svg className="icon icon--cross">
          </svg>
        </button>
      </div>
    );
  }
}

export default Content;
