import { useState, useRef } from 'react';

export default function Player() {
  const playerName = useRef();
  const [inputtedPlayerName, setInputtedPlayerName] = useState('');

  function handleClick() {
    setInputtedPlayerName(playerName.current.value);
    playerName.current.value = '';
  } 

  return (
    <section id="player">
      <h2>Welcome {inputtedPlayerName ?? ''}!</h2>
      <p>
        <input ref={playerName} type="text"/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
