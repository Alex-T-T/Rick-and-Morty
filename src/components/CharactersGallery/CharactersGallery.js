import logo from '../../assets/images/PngItem_438051 2.png'
import { CharacterGalleryItem } from '../CharacterGalleryItem/CharacterGalleryItem'
import { Character } from '../Character/Character'

export const CharactersGallery = ({list}) => {

    return (
        <>
            <header>
                <img src={logo} alt='Rick and Morty logo'/>
            </header>

            <main>
                <input 
                        type="text"
                        name="filter"
                        autoComplete="off"
                        autoFocus
                        placeholder='Filter by name...'
                />
                {
                    list && list.map(({id, ...labels}) => {
                        return (
                            <CharacterGalleryItem key={id} props={labels} />
                        )
                    })
                }
                <Character/>
            </main>
        </>
    )
}