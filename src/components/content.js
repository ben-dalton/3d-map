import React, { Component } from 'react';

class Content extends Component {
  render() {
    return (
      <div className={`content ${this.props.activeNamingOp && 'content--open'}`}>
        <div className={`content__item ${this.props.activeNamingOp && 'content__item--current'}`}>
          <h3 className="content__item-title">
            {this.props.activeNamingOp && this.props.activeNamingOp.title}
            {this.props.activeNamingOp && this.props.activeNamingOp.id}
          </h3>
          <div className="content__item-details">
            <img className="content_image" src={process.env.PUBLIC_URL + '/assets/images/photo1.jpg'} alt="" />
            <p className="content__meta">
              <span className="content__meta-item"><strong>Opening Hours:</strong> 6:30AM — 11:30PM</span>
              <span className="content__meta-item"><strong>Phone:</strong> (0) 66 5738902</span>
            </p>
            <p className="content__desc">{this.props.activeNamingOp && this.props.activeNamingOp.description}</p>
          </div>
        </div>
        <button
          onClick={() => this.props.onCloseNamingOp()}
          className={`boxbutton boxbutton--dark ${this.props.activeNamingOp ? 'content__button' : 'content__button--hidden'}`} >
          <svg viewBox="0 0 40 40">
            <path style={{"stroke": "#fff"}} className="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30" />
          </svg>
        </button>
      </div>
    );
  }
}

export default Content;
