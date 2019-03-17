import React, { Component } from 'react'

class ProfessionListItem extends React.Component {


  render() {
    const {id, name} = this.props.profession;
    return (
      <li 
          key={this.props.profession.Id}
          className="professionOption" 
          onClick={this.props.changeProf.bind(this, id, name)}
          >
          {name}
      </li>
    )  
  };
}

export default ProfessionListItem