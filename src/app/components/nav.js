import React,{ Component } from 'react';

class Nav extends Component{
    render(){
        return(
            <div>
                <nav className="light-blue darken-4">
                    <div className="container">
                        <a className="brand-logo" href="/">Registro | Inicio de sesión</a>
                    </div>
                </nav> 
            </div>
        )
    }
}

export default Nav;