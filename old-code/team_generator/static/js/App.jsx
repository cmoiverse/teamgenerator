import React from "react";

export default class App extends React.Component {
  render () {
    const delimiterMessage = 'all non-alphabetical items will be treated like as delimiters';

    return (
      <div>
        <p> It begins </p>
        <div>dskfsdklfjdsjf</div>
        <h3> {delimiterMessage} </h3>
        <div>
          afdsdmfldsf;sdf;k
        </div>
      </div>
    );
  }
}

/**
 * Used for displaying all current members
 * @param {*} props
 */
function teamView (props) {

}

function team (props) {

}

/**
 *
 * @param {*} props
 */
function subTeam (props) {

}

/**
 * Add single member
 * @param {*} props
 */
function addMember (props) {

}

/**
 * Add multiple members
 * @param {*} props
 */
function addMembers (props) {

}

/**
 * remove selected member
 * @param {*} props
 */
function removeMember (props) {

}

/**
 * remove selected members
 * @param {*} props
 */
function removeMembers (props) {

}

/**
 * change selected member name
 * @param {*} props
 */
function updateMember (props) {

}
