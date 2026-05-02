import './Cell.css'

interface Props {
  cell: string;
  id: number;
}

const Cell = ({cell}: Props) => {
  return (
    <div className="cell">{cell}</div>
  )
}

export default Cell