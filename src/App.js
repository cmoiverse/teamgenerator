import React, { Component } from 'react';
import './App.css';
import TeamForm from './Form/TeamForm';
import TeamDisplay from './Display/TeamDisplay';
import MemberForm from './Form/MemberForm';
import MemberDisplay from './Display/MemberDisplay';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      members: [],
      currentMember: { text: '', key: '', type: 'member' },
      teams: [],
      currentTeam: { text: '', key: '', type: 'team', members: [] },
      distributed: false
    }
    this.defaultState = this.state
  }

  addMember = e => {
    e.preventDefault()
    const newMember = this.state.currentMember
    if (newMember.text !== '') {
      const members = [...this.state.members, newMember]
      this.setState({
        members,
        currentMember: { text: '', key: '', type: 'member' },
      })
    }
  }
  addTeam = e => {
    e.preventDefault()
    const newTeam = this.state.currentTeam
    if (newTeam.text !== '') {
      const teams = [...this.state.teams, newTeam]
      this.setState({
        teams,
        currentTeam: { text: '', key: '', type: 'team', members: [] },
      })
    }
  }

  handleInputMember = e => {
    const memberText = e.target.value
    const currentMember = { text: memberText, key: Date.now(), type: 'member' }
    this.setState({
      currentMember,
    })
  }
  handleInputTeam = e => {
    const teamText = e.target.value
    const currentTeam = {
      text: teamText, key: Date.now(), type: 'team', members: []
    }
    this.setState({
      currentTeam,
    })
  }

  distributeMembers() {
    let teams = this.state.teams
    const members = this.state.members
    members.sort(() => { return 0.5 - Math.random() })
    /**
     * If there are no teams stop
     */
    if (teams.length === 0) { return; }

    /**
     * If there are not enough members for teams stop
     */
    if (teams.length > members.length) { return; }
    teams = this.distributeMembersStack(members, teams);
    this.setState({
      teams,
      currentTeam: { text: '', key: '', type: 'team', members: [] },
      distributed: true
    })
  }

  distributeMembersStack(members, teams) {
    let memberPerTeam = members.length / teams.length;
    memberPerTeam = Math.floor(memberPerTeam)
    for(let team of teams) {
      if (members.length === 0) {
        return teams;
      }
      team.members = members.splice(0, memberPerTeam)
    }
    if(members.length !== 0) {
      teams[0].members.push(members.pop())
    }//check if there're still members
    return teams
  }

  resetState() {
    this.setState(this.defaultState)
  }

  render() {
    return (
      <div className="App">
        <div className="App">
          <MemberForm
            addMember={this.addMember}
            inputMember={this.inputMember}
            handleInputMember={this.handleInputMember}
            currentMember={this.state.currentMember}
          />
          <MemberDisplay
            memberEntries={this.state.members}
          />
          <TeamForm
            addTeam={this.addTeam}
            inputTeam={this.inputTeam}
            handleInputTeam={this.handleInputTeam}
            currentTeam={this.state.currentTeam}
          />
          <TeamDisplay
            teamEntries={this.state.teams}
            distributed={this.state.distributed}
          />
        </div>
        <button type="button"
          onClick={() => this.distributeMembers()}
        >
          Distribute
        </button>
        <button type="button"
          onClick={() => this.resetState()}
        >
          Reset
        </button>
      </div>
    );
  }
}
