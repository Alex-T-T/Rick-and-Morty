import { Link } from "react-router-dom"

export const CharacterGalleryItem = ({ id, ...labels }) => {
    const { image, name, species} = labels.props

    return (
            <Link to={`/character/${id}`}>
                <img src={image} alt='character avatar'/>
                <div>
                    <h2>{name}</h2>
                    <p>{species}</p>
                </div>
            </Link>
    )
}