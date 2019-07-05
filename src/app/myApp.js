import React, { Component } from 'react';
import Form from './components/Form'

class MyApp extends Component{

    render(){
        return(
            <div>

                {/* Navegación */}
                <nav className="light-blue darken-4">
                    <div className="container">
                        <a className="brand-logo" href="/">Registro | Inicio de sesión</a>
                    </div>
                </nav> 

                <div className="container">
                    <div className="row">
                        <div className="col s6">
                            <Form />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default MyApp;