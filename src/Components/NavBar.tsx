import React from 'react'
import '../App'; 
import './styles.css';

const NavBar = () => {
    return (
        <div className="Nav_bar">
            <div className="titre">
                <div>E-Talk</div>
                <div className="field_search">
                    <i className="fas fa-search"></i>
                    <input type="text"  placeholder="Rechercher..."/>
                </div>
            </div>    
            <ul className="Nav_items" >
                <li>
                    <i className="far fa-user-circle"></i>
                    <a href="#">Miandry05</a>
                </li>
                <li>
                     <i className="far fa-bell"></i>
                    <a href="#">Notifications</a>
                </li>
            </ul>
            <div><a href="#"><button>Se déconnecter</button></a></div>
        </div>
    )
}

export default NavBar
