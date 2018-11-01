import React, { Component } from 'react';
import './Member.css';

export default class Member extends Component {
  componentDidUpdate() {
    try {
      if(this.props.inputMember) {
        this.props.inputMember.current.focus()
      }
    } catch (err) {
      console.log(err)
    }
  }
  render() {
    return (
      <div className="Member">
        <div className="header">
          <form onSubmit={this.props.addMember}>
            <input
              placeholder="Member"
              ref={this.props.inputMember}
              value={this.props.currentMember.text}
              onChange={this.props.handleInputMember}
            />
            <button type="submit"> Add Member </button>
          </form>
        </div>
      </div>
    )
  }
}
