import './Tries.css'

interface Props {
    counter: number
}

const Tries = ({ counter }: Props) => {
    return (
        <div className="tries">Tries: {counter}</div>
    )
}

export default Tries