import { NavLink } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import styles from './Nav.module.css'

export default function Nav(props){
    return (
        <div className={styles.contenedor}>
            <div className={styles.divorin}>
                <NavLink  to='/about' className={styles.navi}>ABOUT</NavLink>
                <NavLink  to='/home' className={styles.navi}>HOME</NavLink>
                <NavLink to='/favorites' className={styles.navi}>FAVORITES</NavLink>
                <div className={styles.padreLogOut}>
                    <button className={styles.logOut} onClick={() => window.location.reload()}> Log Out</button>
                </div>
            </div>
            <SearchBar onSearch={props.onSearch}/>
        </div>
    )
}
