import React, { Component } from 'react';
import './App.css';
import TeamForm from './Form/TeamForm';
import MemberForm from './Form/MemberForm';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      members: [],
      currentMember: {text:'', key:'', type: 'member'},
      teams: [],
      currentTeam: {text:'', key:'', type: 'team'}
    }
  }
  addMember = e => {
    e.preventDefault()
    const newMember = this.state.currentMember
    if (newMember.text !== '') {
      console.log(newMember)
      const members = [...this.state.members, newMember]
      this.setState({
        members: members,
        currentMember: { text:'', key: '', type: 'member'},
      })
    }
  }
  addTeam = e => {
    e.preventDefault()
    const newTeam = this.state.currentTeam
    if (newTeam.text !== '') {
      console.log(newTeam)
      const teams = [...this.state.teams, newTeam]
      this.setState({
        teams: teams,
        currentTeam: { text:'', key: '', type: 'team'},
      })
    }
  }
  handleInputMember = e => {
    const memberText = e.target.value
    const currentMember = { text: memberText, key: Date.now(), type: 'member'}
    this.setState({
      currentMember,
    })
  }
  handleInputTeam = e => {
    const teamText = e.target.value
    const currentTeam = { text: teamText, key: Date.now(), type: 'team'}
    this.setState({
      currentTeam,
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App">
          <TeamForm
            addTeam={this.addTeam}
            inputTeam={this.inputTeam}
            handleInputTeam={this.handleInputTeam}
            currentTeam={this.state.currentTeam}
          />
          <MemberForm
            addMember={this.addMember}
            inputMember={this.inputMember}
            handleInputMember={this.handleInputMember}
            currentMember={this.state.currentMember}
          />
        </div>
        <button type="button">Analyze Teams & Members</button>
      </div>
    );
  }
}
