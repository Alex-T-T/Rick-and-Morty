import { CharactersGallery } from "./CharactersGallery/CharactersGallery";
import { useEffect, useState } from 'react'
import { getCharacters } from 'rickmortyapi'


function App() {
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

  const sortedCharacters = characters.sort((a, b) => a.name.localeCompare(b.name));




  return (
    <>
        <CharactersGallery list={sortedCharacters}/>

    </>
  );
}

export default App;
