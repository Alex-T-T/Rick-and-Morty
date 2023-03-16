import css from '../CharacterGalleryItem/CharacterGalleryItem.module.css'

export const CharacterGalleryItem = (props) => {
    const { image, name, species } = props

    return (
        <div className={css.characterCard}>
            <img src={image} className={css.characterAvatar} alt='character avatar' />
            <div className={css.characterInfo}>
                <h2 className={css.characterInfoTitle}>{name}</h2>
                <p className={css.characterInfoText}>{species}</p>
            </div>
        </div>
    )
}