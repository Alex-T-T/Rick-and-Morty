
export const CharacterGalleryItem = (props) => {
    const { image, name, species} = props

    return (
            <>
                <img src={image} alt='character avatar'/>
                <div>
                    <h2>{name}</h2>
                    <p>{species}</p>
                </div>
            </>
    )
}