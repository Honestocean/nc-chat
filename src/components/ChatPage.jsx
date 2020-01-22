import React, { Component } from "react";
import ChatWindow from "./ChatWindow";
import OnlineDisplay from "./OnlineDisplay";

export default class ChatPage extends Component {
  state = {
    allLoggedinUsers: ["guest1", "user2", "otherGuy", "someGal"]
  };

  render() {
    const { loggedInUser } = this.props;
    const { allLoggedinUsers } = this.state;

    return (
      <div>
        <h2>Chat Page</h2>
        <div className="ChatPage">
          <ChatWindow loggedInUser={loggedInUser} />
          <OnlineDisplay allLoggedinUsers={allLoggedinUsers} />
        </div>
      </div>
    );
  }
}
