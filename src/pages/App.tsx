import { useState, type CSSProperties } from 'react';
import './App.css'
import Cell from '../components/cell/Cell';
import Reset from '../components/button/Reset';
import Tries from '../components/tries/Tries';


interface Cell {
  cell: string,
  hasItem: boolean,
  clicked: boolean,
  id: number
}

const App = () => {

  const [count, setCount] = useState(0);

  const CreateField = () => {
    const newField = [];
    const random: number = Math.floor(Math.random() * 36);

    for (let i = 0; i < 36; i++) {
      const newCell = {
        hasItem: false,
        clicked: false,
        cell: '',
        id: i + 1
      };

      if (random === i) {
        newCell.hasItem = true;
        newCell.cell = '❌';        
      }
      newField.push(newCell);
    };
    return newField;
  };

  const ResetGame = () => {
    setCount(0);
    const newField = CreateField();
    setField(newField);
  }

  const [field, setField] = useState(CreateField());


  const OpenCell = (id: number) => {
    setCount(prev => prev + 1);
    const copyField = [...field];
    const index = copyField.findIndex(cell => cell.id === id);
    copyField[index].clicked = true;
    setField(copyField)
  }

  return (
    <>
      <div className='fieldWrapper'>
        {field.map((cell) => (
          <Cell
            key={cell.id}
            cell={cell.cell}
            id={cell.id}
            clicked={cell.clicked}
            onClickCell={() => OpenCell(cell.id)} />
        ))}
      </div>
      <div className='triesWrapper'>
          <Tries counter={count}/>
      </div>
      <div className='btnWrapper'>
          <Reset onClickReset={ResetGame}/>
      </div>
    </>

  )
}

export default App
