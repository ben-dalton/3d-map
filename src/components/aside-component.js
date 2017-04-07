import React, { Component } from 'react';

class AsideComponent extends Component {
  render() {
    const zoneList = zone => {
      return (
        <li key={zone.zone_label} className="list__item">{zone.zone_label}
          <ul>
            {zone.naming_ops.map(n => {
              return (
                <li key={n.id} className="list__item">
                  <a onClick={() => this.props.onSelectNamingOp(n.id)} className="list__link">{n.title}</a>
                </li>
              );
            })}
          </ul>
        </li>
      );
    }
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
        <ul  className="list grouped-by-category">
          { this.props.available_naming_ops.map(zone => zoneList(zone)) }
        </ul>
      </aside>
    );
  }
}

export default AsideComponent;
