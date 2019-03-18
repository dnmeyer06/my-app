import React, { Component } from "react";

class OccupationOutput extends React.Component {
  render() {
    return this.props.skillSpecialities.map(skillListItem => (
      <p>{skillListItem}</p>
    ));
  }
}

export default OccupationOutput;
