import css from '../CharacterGalleryItem/CharacterGalleryItem.module.css'
import { updateSrting } from '../../utils/updateString';


export const CharacterGalleryItem = (props) => {
    const { image, name, species } = props

    const changedNameLength = updateSrting(name)

    return (
        <div className={css.characterCard}>
            <img src={image} className={css.characterAvatar} alt='character avatar' />
            <div className={css.characterInfo}>
                <h2 className={css.characterInfoTitle}>{changedNameLength}</h2>
                <p className={css.characterInfoText}>{species}</p>
            </div>
        </div>
    )
}