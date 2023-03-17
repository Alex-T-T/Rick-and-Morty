import logo from '../assets/images/PngItem_438051 2.png'
import css from './StartPage.module.css'
import { RiLoginBoxLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

export const StartPage = () => {

    return (
        <div className={css.container}>
            <header className={css.header}>
                <img className={css.logo} src={logo} alt='Rick and Morty logo' />
            </header>

            <h2 className={css.title}> If you want to know something about these guys press here</h2>
            <Link to='/login'><RiLoginBoxLine size={40} /></Link>

        </div>
    )
}