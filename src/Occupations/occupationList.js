import React, { Component } from "react";
import OccupationListItem from "./occupationListItems";

class OccupationList extends React.Component {
  render() {
    return this.props.occupationList.map(listItem => (
      <OccupationListItem
        occupation={listItem}
        changeOccupation={this.props.selectOccupation}
      />
    ));
  }
}

export default OccupationList;
