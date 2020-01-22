import React from 'react';

function OnlineDisplay(props) {

  const { allLoggedinUsers } = props

  return (
    <div className="LoggedInBox">
      <h3>Currently logged-in users</h3>
      {allLoggedinUsers.map (user => <li key={user}>{user}</li>)}
    </div>
  );
}

export default OnlineDisplay;