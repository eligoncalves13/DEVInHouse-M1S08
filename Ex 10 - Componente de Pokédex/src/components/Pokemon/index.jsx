import { handleGenerateBg } from "../../utils";

const Pokemon = ({name, id, photo, types}) => {
    const typeColor = handleGenerateBg(types[0])
    return (
        <div className="pokemon-container" style={{ background: typeColor}}>
            <img src={photo}
                alt={name}
                className="pokemon-image"
            />
            <h2>{name}</h2>
            <div className="pokemon-type">
                {types.join(' | ')}
            </div>
        </div>
  )
}

export default Pokemon;