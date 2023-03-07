import logo from '../../assets/images/PngItem_438051 2.png'
import { CharacterGalleryItem } from '../CharacterGalleryItem/CharacterGalleryItem'
import { useEffect, useState } from 'react'
import { getCharacters } from 'rickmortyapi'

export const CharactersGallery = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const getAllCharacters = async () => {
        try {
            const data = await getCharacters();
            setCharacters(data.data.results);
        } catch (error) {
            throw new Error(error.message);
        }
        };
        getAllCharacters();
    }, []);

    const charactersList = characters.sort((a, b) => a.name.localeCompare(b.name));

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
                <ul>
                    {
                        charactersList && charactersList?.map(({id, ...labels}) => {
                            return (
                                <CharacterGalleryItem key={id} id={id} props={labels} />
                            )
                        })
                    }
                </ul>
            </main>
        </>
    )
}