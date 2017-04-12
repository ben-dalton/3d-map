import React, { Component } from 'react';
import styled from 'styled-components';

class AsideComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      currentlyDisplayed: this.props.available_naming_ops
    }
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(term) {
    let newlyDisplayed = this.props.available_naming_ops.map(zone => {
      return {
        ...zone,
        naming_ops: zone.naming_ops.filter(n => n.title.toLowerCase().includes(term.toLowerCase()))
      }
    });

    this.setState({
      searchTerm: term,
      currentlyDisplayed: newlyDisplayed
    })
  }

  render() {
    const ListLink = styled.a`
      &:hover {
        cursor: pointer;
      }
    `;
    const zoneList = zone => {
      return (
        <li key={zone.zone_label} className="list__item">{zone.zone_label}
          <ul>
            {zone.naming_ops.map(n => {
              return (
                <li key={n.id} className="list__item">
                  <ListLink onClick={() => this.props.onSelectNamingOp(zone.zone_id, n.level_id, n.id)} className="list__link">{n.title}</ListLink>
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
          <input
            onChange={event => this.onInputChange(event.target.value)}
            value={this.state.searchTerm}
            className="search__input" placeholder="Search..." />
          <button className="boxbutton boxbutton--darker close-search">
          </button>
        </div>
        <ul  className="list grouped-by-category">
          { this.state.currentlyDisplayed.map(zone => zoneList(zone)) }
        </ul>
      </aside>
    );
  }
}

export default AsideComponent;
