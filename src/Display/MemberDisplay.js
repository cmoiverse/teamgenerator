import React, { Component } from 'react';
import './MemberDisplay.css';

export default class MemberDisplay extends Component {
  createMembers(member) {
    return <li key={member.key}>{member.text}</li>
  }
  render() {
    const memberEntries = this.props.memberEntries;
    const members = memberEntries.map(this.createMembers);
    return <ul className="MemberDisplay">{members}</ul>
  }
}
