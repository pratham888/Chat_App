import React from 'react';
import './ChatApp.css'; // Import your CSS file
import ChatApp from './components/ChatApp/ChatApp';
import Navbar from './components/navbar'; // Corrected import

function App() {
  return (
    <div className="app-container"> {/* Container element */}
      <Navbar /> {/* Navbar component */}
      <main className="main-container"> {/* Main content container */}
        <ChatApp /> {/* ChatApp component */}
      </main>
    </div>
  );
}

export default App;

