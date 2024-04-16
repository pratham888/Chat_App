
import React from 'react';

const ChatMessage = ({ message, onLike, isSent }) => {
  const messageClass = isSent ? 'sent-message' : 'received-message';

  // Function to get the first letter of the username
  const getUsernameInitial = (username) => {
    return username.charAt(0).toUpperCase();
  };

  // Function to generate a random color
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className={`message ${messageClass}`}>
      <div className="content">
        <span className="username">
          {/* Check if user image exists, if not, display the username's first letter */}
          {message.userImage ? (
            <img src={message.userImage} alt="User Avatar" />
          ) : (
            <span className="user-initial" style={{ backgroundColor: getRandomColor() }}>
              {getUsernameInitial(message.user)}
            </span>
          )}
          {message.user}
        </span>
        <span className="text">{message.text}</span>
      </div>
      <button onClick={onLike} className="like-button">
        <img
          src="https://icons.iconarchive.com/icons/succodesign/love-is-in-the-web/256/heart-icon.png"
          alt="Like"
        />
        <span>({message.likes})</span>
      </button>
    </div>
  );
};

export default ChatMessage;
