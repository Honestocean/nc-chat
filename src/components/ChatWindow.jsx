import React, { Component } from 'react';
import { messageFunc } from '../api';

class ChatWindow extends Component {
  state = {
    receivedMessages: [],
    myMessage: ''
  };

  componentDidMount() {}

  render() {
    const { receivedMessages } = this.state;
    return (
      <div className="ChatWindow">
        {receivedMessages.map(message => {
          return <p>{message}</p>;
        })}
      </div>
    );
  }

  addMessage = () => {
    messageFunc((err, message) =>
      this.setState(currentState => {
        return {
          receivedMessages: [message, ...currentState.receivedMessages]
        };
      })
    );
  };
}

export default ChatWindow;
