
import css from './StartPage.module.css'
import { RiLoginBoxLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { Logo } from '../components/Logo/Logo'

export const StartPage = () => {

    return (
        <div className={css.container}>
            <header className={css.header}>
                <Logo />
            </header>

            <h2 className={css.title}> If you want to know something about these guys press here</h2>
            <Link to='/login'><RiLoginBoxLine size={40} /></Link>

        </div>
    )
}