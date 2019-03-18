import React, { Component } from "react";
import ProfList from "./occupationList";
import OccupationOutput from "./occupationOutput.js";

class OccupationSection extends React.Component {
  render() {
    const skillSpecialitesList = (
      <OccupationOutput skillSpecialities={this.props.skillList} />
    );
    return (
      <div className="row">
        <div className="col-4-sm offset-1">
          <ul className="profSelector">
            <ProfList
              selectOccupation={this.props.selectOccupation}
              occupationList={this.props.occupationList}
            />
          </ul>
        </div>
        <div className="col-6-sm offset-1">
          <div>Selected occupation: {this.props.occupationName}</div>
          <div className="col-12-sm">
            {this.props.skillList ? skillSpecialitesList : <span />}
          </div>
        </div>
      </div>
    );
  }
}

export default OccupationSection;
