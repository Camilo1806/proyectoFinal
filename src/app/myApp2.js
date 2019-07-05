import React, { Component } from 'react';

import Nav from './components/nav';
import Interfaz from './components/interfazLog'

class MyApp2 extends Component{

    render(){
        return(
            <div>
                <Nav />
                <Interfaz />
            </div>
        )
    }
}

export default MyApp2