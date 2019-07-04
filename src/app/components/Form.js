import React, { Component } from 'react';

class Form extends Component{

    render(){
        return (
            <div>

                <nav className="light-blue darken-4">
                    <div className="container">
                        <a className="brand-logo" href="/">Registro | Inicio de sesión</a>
                    </div>
                </nav> 

                <div className="container">
                    <div className="row">
                        <div className="col s6">
                            <div className="card">
                                <div className="card-content">
                                    <form autoComplete="off">
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input type="text" name="nombres" placeholder="Nombres" required/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input type="text" name="apellidos" placeholder="Apellidos" required/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="select-field col s12">
                                                <select name="tipo_documento" className="browser-default" required>
                                                    <option value="" disabled selected>Tipo de Documento</option>
                                                    <option value="TI">T.I</option>
                                                    <option value="CC">C.C</option>
                                                    <option value="CE">C.E</option>
                                                    <option value="RC">R.C</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input type="number" name="numero_documento" placeholder="Número de documento" required></input>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <label>Fecha de Expedición</label>
                                            </div>
                                            <div className="input-field col s12">
                                                <input name="fecha_expedicion" type="date" required></input>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <label>Fecha de Nacimiento</label>
                                            </div>
                                            <div className="input-field col s12">
                                                <input name="fecha_nacimiento" type="date" required></input>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="select-field col s12">
                                                <select name="sexo" className="browser-default" required>
                                                    <option value="" disabled selected>Sexo</option>
                                                    <option value="hombre">Hombre</option>
                                                    <option value="mujer">Mujer</option>
                                                    <option value="indefinido">Indefinido</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div >
                                                <label className="input-field col s12">
                                                <input type="checkbox" name="acept_terminos" id="test" className="browser-default filled-in" value={true} required/>
                                                <span>Acepto terminos y condiciones</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="container">
                                            <button className="btn light-blue darken-4" type="submit">
                                                Register
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
        
}

export default Form;