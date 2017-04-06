import React, { Component } from 'react';

class AsideComponent extends Component {
  render() {
    return (
      <aside className="spaces-list" id="spaces-list">
        <div className="search">
          <input className="search__input" placeholder="Search..." />
          <button className="boxbutton boxbutton--darker close-search">
          </button>
        </div>
        <span className="label">
          <input id="sort-by-name" className="label__checkbox" type="checkbox" />
          <label className="label__text">A - Z</label>
        </span>
        <ul className="list grouped-by-category">
          <li className="list__item">
            <a href="#" className="list__link">
              Naming Opportunity
            </a>
          </li>
        </ul>
      </aside>
    );
  }
}

export default AsideComponent;
