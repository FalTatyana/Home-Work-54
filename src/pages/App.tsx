import { useState } from 'react';
import './App.css'
import Cell from '../components/cell/Cell';
import Reset from '../components/button/Reset';
import Tries from '../components/tries/Tries';
import CreateField from '../components/field/CreateField'

interface Cell {
  cell: string,
  hasItem: boolean,
  clicked: boolean,
  id: number
}

const App = () => {

  const [field, setField] = useState(CreateField());
  const [count, setCount] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const ResetGame = () => {
    setCount(0);
    setGameOver(false);
    const newField = CreateField();
    setField(newField);
  };

  const OpenCell = (id: number) => {
    if (gameOver === false) {
      const copyField = [...field];
      const index = copyField.findIndex(cell => cell.id === id);
      const clickedCell = copyField[index];

      if (clickedCell.clicked === true) {
        return;
      } else {
        clickedCell.clicked = true;
        const newCount = count + 1;
        setCount(newCount);
      }

      if (copyField[index].hasItem) {
        setGameOver(true);
        const answer = confirm(`You guessed it on the try! Play again?`);

        if (answer) {
          setGameOver(false);
          ResetGame();
          return;
        };
      };
      setField(copyField)
    };
  };

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
        <Tries counter={count} />
      </div>
      <div className='btnWrapper'>
        <Reset onClickReset={ResetGame} />
      </div>
    </>
  );
};

export default App