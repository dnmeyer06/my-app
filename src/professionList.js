import React, { Component } from 'react'
import ProfessionListItem from './professionListItems';

class ProfList extends React.Component {
    render() {
      return this.props.profList.map((listItem) => (
        <ProfessionListItem profession={listItem} changeProf={this.props.selectProf}/>
      ));
    }
  }

export default ProfList



