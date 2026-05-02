import { useEffect, useState } from 'react';
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
  const [field, setField] = useState<Cell[]>([
  ]);

  const CreateField = () => {
    const newField = [];
    for (let i = 0; i < 36; i++) {
      const newCell = {
        hasItem: false,
        clicked: false,
        cell: '',
        id: i + 1
      }
      newField.push(newCell);
    };
    setField(newField);
  };

  useEffect(() => {
    CreateField();
  }, []);

  return (
    <>
      <div className='fieldWrapper'>
        {field.map((cell) => (
          <Cell
            key={cell.id}
            cell={cell.cell}
            id={cell.id}
          />
        ))}
      </div>
      <div className='triesWrapper'>
          <Tries count={0}/>
      </div>
      <div className='btnWrapper'>
          <Reset/>
      </div>
    </>

  )
}

export default App
