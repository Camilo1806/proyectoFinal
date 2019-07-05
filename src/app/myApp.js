import React, { Component } from 'react';

import FormRegister from './components/FormRegister';
import FormLogin from './components/FormLogin';
import Nav from './components/nav'

class MyApp extends Component{

    render(){
        return(
            <div>

                <Nav />               

                <div className="container">
                    <div className="row">
                        <div className="col s6">
                            <FormRegister />
                        </div>
                        <div className="col s6">
                            <FormLogin />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default MyApp;