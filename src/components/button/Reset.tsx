import "./reset.css"

interface Props {
  onClickReset: () => void
}

const Reset = ({ onClickReset }: Props) => {
  return (
    <button onClick={onClickReset} className="btn">Reset</button>
  )
}

export default Reset