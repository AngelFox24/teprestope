import React from 'react'
import './header.css'

function Header(){
    return (       
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand " href="#">TePrestope</a>
            <div className="collapse navbar-collapse" id="navbarColor01"></div>
            <button type="button" className="btn btn-warning my-2 my-sm-0">Mis Juntas</button>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            
        </nav>
    )
}

export default Header;