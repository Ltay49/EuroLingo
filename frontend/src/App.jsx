import React, { useState } from "react";
import PhaserGame from "./PhaserGame";
import Header from "./Components/Header";
import LogIn from "./Components/LogIn";
import CreateAccount from "./Components/CreateAccount";
import "./App.css";

const App = () => {
  const [gameStart, setGameStart] = useState(false);
  const [username, setUsername] = useState("");
  const [showLogIn, setShowLogIn] = useState(true);

  return (
    <div>
      <Header username={username} gameStart={gameStart}/>
      {gameStart ? (
        <PhaserGame username={username}/>
      ) : showLogIn ? (
        <LogIn setGameStart={setGameStart} setShowLogIn={setShowLogIn} username={username} setUsername={setUsername} gameStart={gameStart}/>
      ) : (
        <CreateAccount setShowLogIn={setShowLogIn} />
      )}
    </div>
  );
};

export default App;
