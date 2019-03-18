import React, { Component } from "react";

class OccupationListItem extends React.Component {
  render() {
    const { id, name, skills } = this.props.occupation;
    return (
      <li
        key={this.props.occupation.Id}
        className="occupationOption"
        onClick={this.props.changeOccupation.bind(this, id, name, skills)}
      >
        {name}
      </li>
    );
  }
}

export default OccupationListItem;
