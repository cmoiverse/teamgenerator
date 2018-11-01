import React, { Component } from 'react';
import './Team.css';

export default class Team extends Component {
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
      <div className="Team">
        <div className="header">
          <form onSubmit={this.props.addTeam}>
            <input
              placeholder="Team"
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
