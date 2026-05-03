import './Cell.css'

interface Props {
  cell: string;
  clicked: boolean;
  id: number;
  onClickCell: () => void
}

const Cell = ({cell, onClickCell, clicked}: Props) => {
  return (
    <div onClick={onClickCell} className={clicked ? "cellOpen" : "cell"}>{clicked ? cell : ''}</div>
  )
}

export default Cell