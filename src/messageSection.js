import React, { Component } from "react";

class MessageSection extends React.Component {
  render() {
    return (
      <div className="messageSection">
        <p className="text-center">{this.props.message}</p>
      </div>
    );
  }
}

export default MessageSection;
