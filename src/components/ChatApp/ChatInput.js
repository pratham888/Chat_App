import React, { useState } from 'react';

const ChatInput = ({ onSend }) => {
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    onSend(inputText);
    setInputText('');
  };

  return (
    <div className="chat-input">
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Type your message..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default ChatInput;
