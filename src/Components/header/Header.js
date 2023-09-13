import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';

class Header extends React.Component{
    render(){
        return(
            <>
                <header>
                    <Link to="/" id="header-logo" class="header-nav-link">Snake</Link>
                    <Link to="/game" class="header-nav-link">Play Now!</Link>
                </header>
            </>
        )
    }
};

export default Header;