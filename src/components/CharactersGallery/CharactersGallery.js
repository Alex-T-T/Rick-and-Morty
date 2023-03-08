import logo from '../../assets/images/PngItem_438051 2.png'
import { CharacterGalleryItem } from '../CharacterGalleryItem/CharacterGalleryItem'
import { useEffect, useState } from 'react'
import { getCharacters } from 'rickmortyapi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import debounce from 'lodash.debounce';
import { useSearchParams } from 'react-router-dom';


export const CharactersGallery = () => {
    const [characters, setCharacters] = useState(JSON.parse(window.localStorage.getItem('characters')) || []);
    let [searchParams, setSearchParams] = useSearchParams();

    const name = searchParams.get('name') || '';

    useEffect(() => {
        if (name !== '') {
            const getAllCharacters = async (name) => {
            try {
                const data = await getCharacters({ name })
                if (data.status === 404) {
                        toast.error('Sorry! There are no searching Characters! Try once more!')
                        return
                    }
                setCharacters(data.data.results)
                window.localStorage.setItem('characters', JSON.stringify(data.data.results))
            } catch (error) {
                throw new Error(error);
                }
            };
                getAllCharacters(name)
            return
        }
        const getAllCharacters = async () => {
            try {
                const data = await getCharacters()
                setCharacters(data.data.results)
            } catch (error) {
                throw new Error(error);
                }
            };
                getAllCharacters()
    }, [name])


    
    const charactersList = characters?.sort((a, b) => a.name.localeCompare(b.name));

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
                        onChange={debounce((e) => setSearchParams({ "name": e.target.value}), 300)}
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
            <ToastContainer theme="dark" position="bottom-center" autoClose={3000} />
        </>
    )
}