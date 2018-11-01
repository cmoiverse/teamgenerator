import React, { Component } from 'react';
import './TeamDisplay.css';

export default class TeamDisplay extends Component {
  createTeams(team) {
    return <li key={team.key}>{team.text}</li>
  }
  render() {
    const teamEntries = this.props.teamEntries;
    const teams = teamEntries.map(this.createTeams);
    return <ul className="TeamDisplay">{teams}</ul>
  }
}
