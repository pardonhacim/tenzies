
import React from 'react';
import './App.css';
import Die from './components/Die';

function App() {
  const[dice,setDice]=React.useState(allDiceNumbers());

  const diceElements = dice.map((die) => {
    return <Die dieObj={die}/>;
  })

  function allDiceNumbers(){
    const randomNumbers = [];
    
    for (let i = 0; i < 10; i++) {
      const newObjDice = {
       value:Math.floor(Math.random() * 6) + 1,
       isSelected:false,
      }
      randomNumbers.push(newObjDice);
    }
    return randomNumbers;
  }
 

  return (
    <main>
      <h1 className="title">Tenzies</h1>
      <h4 className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</h4>
      <div className='dice-container'>
        {diceElements}
      </div>

    </main>
  );
}

export default App;
