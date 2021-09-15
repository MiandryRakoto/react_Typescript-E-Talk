import React from 'react'
import '../App'; 
import './styles.css';

const NavBar = () => {
    return (
      <section>
          <div className="container">
            <header>
                <a href="#" className="titre"> E-TALK </a>
                <div className="search">
                    <i className="fas fa-search"></i>
                    <input type="text" placeholder="  Rechercher..." />
                </div>    
                <ul>
                    <li>   
                        <a href="#"><i className="far fa-user-circle"></i>Miandry05</a>
                    </li>
                    <li>
                        <a href="#"><i className="far fa-bell"></i>Notifications</a>
                    </li>
                </ul>
                <button>Se déconnecter</button>
            </header>
          </div>
      </section>
    )
}

export default NavBar
