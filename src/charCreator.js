import React, { Component } from 'react'
import ProfList from './professionList';

class CharCreator extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          professionID: null,
          professionName: null,
          professionList: [
            {
              id: 1,
              name: "Antiquarian"
            },
            {
              id: 2,
              name: "Artist"
            },
            {
              id: 3,
              name: "Athlete"
            },
            {
              id: 4,
              name: "Author"
            },
            {
              id: 5,
              name: "Clergyman"
            },
            {
              id: 6,
              name: "Criminal"
            },
            {
              id: 7,
              name: "Dilettante"
            },
            {
              id: 8,
              name: "Doctor of Medicine"
            },
            {
              id: 9,
              name: "Drifter"
            },
            {
              id: 11,
              name: "Engineer"
            },
            {
              id: 12,
              name: "Entertainer"
            },
            {
              id: 13,
              name: "Farmer/Forester"
            },
            {
              id: 14,
              name: "Journalist"
            },
            {
              id: 15,
              name: "Lawyer"
            },
            {
              id: 16,
              name: "Military Officer"
            },
            {
              id: 17,
              name: "Missionary"
            },
            {
              id: 18,
              name: "Musician"
            },
            {
              id: 19,
              name: "Parapsychologist"
            },
            {
              id: 20,
              name: "Pilot"
            },
            {
              id: 21,
              name: "Police Detective"
            },
            {
              id: 22,
              name: "Policeman"
            },
            {
              id: 23,
              name: "Private Investigator"
            }
          ]
        }
      }

    SelectProfession = (id, name) => {
         this.setState({
          professionID: id,
          professionName: name,
         })
     }

    render() {
      return (
        <div className="charCreator">
            <ul className="profSelector">
                <ProfList selectProf={this.SelectProfession} profList={this.state.professionList} />
            </ul>
            <div>Selected Profession: {this.state.professionName}</div>
        </div>
      );
    }
  }

export default CharCreator



