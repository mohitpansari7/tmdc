import React from 'react'
import './header.scss'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav className='headerContainer'>
            <span><Link to='/'><img src="https://moviezverse.org/wp-content/uploads/2022/09/moviesverselogo.png" alt='logo'></img></Link></span>
            <span className='tabContainer'>
                <span className='headerTabName'><Link to='/movies'>Movies</Link></span>
                <span className='headerTabName'><Link to='/genre'>Genre</Link></span>
            </span>
            <span className='headerProfileIcon'><img src='https://www.freeiconspng.com/uploads/profile-icon-9.png' height='50' alt='profile' /></span>
        </nav>
    )
}

export default Header