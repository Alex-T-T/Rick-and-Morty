import { useEffect, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom';
import { getCharacters } from 'rickmortyapi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import debounce from 'lodash.debounce';
import { Dna } from 'react-loader-spinner';

import logo from '../../assets/images/PngItem_438051 2.png'
import { CharacterGalleryItem } from '../CharacterGalleryItem/CharacterGalleryItem'

export const CharactersGallery = () => {
  const [characters, setCharacters] = useState(JSON.parse(window.localStorage.getItem('characters')) || null);
  let [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true)

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
        setIsLoading(false)
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
      setIsLoading(false)
    };
    getAllCharacters()
  }, [name])



  const charactersList = characters?.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <header>
        <img src={logo} alt='Rick and Morty logo' />
      </header>

      <main>
        <input
          type="text"
          name="filter"
          autoComplete="off"
          autoFocus
          placeholder='Filter by name...'
          onChange={debounce((e) => setSearchParams({ "name": e.target.value }), 300)}
        />

        {
          !isLoading
            ? <ul> {charactersList?.map((character) => {
              return <Link to={character.id.toString()} key={character.id}><CharacterGalleryItem  {...character} /></Link>
            })}
            </ul>
            : <div>
              <p>Loading... Please wait</p>
              <Dna />
            </div>
        }

      </main>
      <ToastContainer theme="dark" position="bottom-center" autoClose={3000} />
    </>
  )
}