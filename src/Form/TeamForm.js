import React, { Component } from 'react';
import './TeamForm.css';

export default class TeamForm extends Component {
  componentDidUpdate() {
    try {
      if(this.props.inputTeam) {
        this.props.inputTeam.current.focus()
      }
    } catch (err) {
      console.log(err)
    }
  }
  render() {
    return (
      <div className="TeamForm">
        <div className="header">
          <form onSubmit={this.props.addTeam}>
            <input
              placeholder="TeamForm"
              ref={this.props.inputTeam}
              value={this.props.currentTeam.text}
              onChange={this.props.handleInputTeam}
            />
            <button type="submit"> Add Team </button>
          </form>
        </div>
      </div>
    )
  }
}
