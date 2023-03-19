import logo from '../../assets/images/PngItem_438051 2.png'
import css from './Logo.module.css'


export const Logo = () => {

    return (
        <img className={css.logo} src={logo} alt='Rick and Morty logo' />
    )
}