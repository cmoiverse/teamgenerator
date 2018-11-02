import React, { Component } from 'react';
import './TeamDisplay.css';

export default class TeamDisplay extends Component {
  createTeams(team) {
    return <li key={team.key}>{team.text}</li>
  }

  createTeamsWithMembers(team) {
    return (
      <li key={team.key}>
        {team.text} has {team.members.length} members
      </li>
    )
  }
  render() {
    const teamEntries = this.props.teamEntries;
    const distributed = this.props.distributed;
    let teams;
    if(distributed) {
      teams = teamEntries.map(this.createTeamsWithMembers);
    } else {
      teams = teamEntries.map(this.createTeams);
    }

    return <ul className="TeamDisplay">{teams}</ul>
  }
}
