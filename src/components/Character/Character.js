import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCharacter } from 'rickmortyapi'

export const Character = () => {
const { id } = useParams();
const [character, setCharacter] = useState({});
const navigate = useNavigate();
    
    useEffect(() => {
        const getCharacterById = async (id) => {
            try {
            const data = await getCharacter(id);
            setCharacter(data.data);
        } catch (error) {
            throw new Error(error.message);
        }
        };
        getCharacterById(Number(id));

    }, [id]);

    const {name, gender, status, species, origin, type, image} = character

    const handleClick = () => {
       navigate(-1);
    }

    return (
        <>
            <header>
                <button onClick={handleClick}> Go Back</button>
            </header>  
            { character && <main>
                <img src={image} alt='character avatar'/>
                <h2> {name} </h2>
                <h3> Informations </h3>
                <ul>
                    <li>
                        <h4>Gender</h4>
                        <p>{gender}</p>
                    </li>
                    <li>
                        <h4>Status</h4>
                        <p>{status}</p>
                    </li>
                    <li>
                        <h4>Specie</h4>
                        <p>{species}</p>
                    </li>
                    <li>
                        <h4>Origin</h4>
                        <p>{ origin?.name }</p>
                    </li>
                    <li>
                        <h4>Type</h4>
                        <p>{type === '' ? 'UNKNOWN' : type  }</p>
                    </li>
                </ul>
            </main>}
        </>
    )
}