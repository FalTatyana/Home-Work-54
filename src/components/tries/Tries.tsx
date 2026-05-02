import './Tries.css'

interface Props {
    count: number
}

const Tries = ({ count }: Props) => {
    return (
        <div className="tries">Tries: {count}</div>
    )
}

export default Tries