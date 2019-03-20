import React, { Component } from "react";
import ProfList from "./occupationList";
import OccupationOutput from "./occupationOutput.js";

class OccupationSection extends React.Component {
  render() {
    const skillSpecialtiesMessage = (
      <div>Selected occupation: {this.props.occupationName}</div>
    )
    const skillSpecialitesList = (
      <OccupationOutput skillSpecialities={this.props.skillList} />
    );
    return (
      <div className="row">
        <div className="col-sm-4 offset-1">
          <ul className="profSelector">
            <ProfList
              selectOccupation={this.props.selectOccupation}
              occupationList={this.props.occupationList}
            />
          </ul>
        </div>
        <div className="col-sm-6 offset-1-sm">
          {this.props.skillList ? skillSpecialtiesMessage : null}
          {this.props.skillList ? skillSpecialitesList : null}
        </div>
      </div>
    );
  }
}

export default OccupationSection;
