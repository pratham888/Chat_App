import React, { useState } from 'react';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';


const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

const ChatApp = () => {
  const [messages, setMessages] = useState([]);

  const handleMessageSend = (text) => {
    if (text.trim() !== '') {
      const randomUser = user_list[Math.floor(Math.random() * user_list.length)];
      const newMessage = {
        user: randomUser,
        text: text,
        likes: 0
      };
      setMessages([...messages, newMessage]);
    }
  };

  const handleLike = (index) => {
    const updatedMessages = [...messages];
    updatedMessages[index].likes += 1;
    setMessages(updatedMessages);
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} onLike={() => handleLike(index)} />
        ))}
      </div>
      <ChatInput onSend={handleMessageSend} />
    </div>
  );
};

export default ChatApp;
