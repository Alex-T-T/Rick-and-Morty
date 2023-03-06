
export const CharacterGalleryItem = (labels) => {
    const { image, name, species} = labels.props

    return (
            <div>
                <img src={image} alt='character avatar'/>
                <div>
                    <h2>{name}</h2>
                    <p>{species}</p>
                </div>
            </div>
    )
}