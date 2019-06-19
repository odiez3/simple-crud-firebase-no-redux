import React from 'react';
import {Link} from 'react-router-dom';
import firebase from 'firebase';

const Navigation = (props) => {

    const signOut = (event)=>{
        event.preventDefault();
        firebase.auth().signOut();
    }

    return (
        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper blue lighten-1">
                    <Link to="/dashboard" className="brand-logo">Logo</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/dashboard/user">Usuario</Link></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="!#" onClick={signOut}><i class="material-icons left">power_settings_new</i>Salir</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navigation;