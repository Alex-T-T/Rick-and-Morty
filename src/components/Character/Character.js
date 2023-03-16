import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCharacter } from 'rickmortyapi'
import { FiArrowLeft } from 'react-icons/fi'
import css from '../Character/Character.module.css'

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

    const { name, gender, status, species, origin, type, image } = character

    const handleClick = () => {
        navigate(-1);
    }

    return (
        <div className={css.container}>
            <header className={css.header}>
                <button className={css.goBackBtn} onClick={handleClick}> <FiArrowLeft style={{
                    verticalAlign: 'middle',
                }} size={24} />Go Back</button>
            </header>
            {character && <main>
                <img src={image} className={css.avatar} alt='character avatar' />
                <h2 className={css.title}> {name}   </h2>
                <h3 className={css.subtitle}> Informations </h3>
                <ul>
                    <li className={css.propertyBox}>
                        <h4 className={css.propertyTitle}>Gender</h4>
                        <p className={css.propertyText}>{gender}</p>
                    </li>
                    <li className={css.propertyBox}>
                        <h4 className={css.propertyTitle}>Status</h4>
                        <p className={css.propertyText}>{status}</p>
                    </li>
                    <li className={css.propertyBox}>
                        <h4 className={css.propertyTitle}>Specie</h4>
                        <p className={css.propertyText}>{species}</p>
                    </li>
                    <li className={css.propertyBox}>
                        <h4 className={css.propertyTitle}>Origin</h4>
                        <p className={css.propertyText}>{origin?.name}</p>
                    </li>
                    <li className={css.propertyBox}>
                        <h4 className={css.propertyTitle}>Type</h4>
                        <p className={css.propertyText}>{type === '' ? 'Unknown' : type}</p>
                    </li>
                </ul>
            </main>}
        </div>
    )
}