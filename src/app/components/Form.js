import React, { Component } from 'react';

class Form extends Component{

    constructor(){
        super()
        this.state={
            nombres: '',
            apellidos: '',
            tipo_documento: '',
            numero_documento: '',
            fecha_expedicion: '',
            fecha_nacimiento: '',
            sexo: ''
        }

        this.catchData=this.catchData.bind(this)
        this.addUser=this.addUser.bind(this)
    }

    catchData(e){
        const {name, value} = e.target
        this.setState({
            [name] : value
        })
    }
    
    addUser(e){
        e.preventDefault();

        if (/(^[a-zA-Z]+\s[a-zA-Z]+$)|(^[a-zA-Z]+$)/.test(this.state.nombres) && /(^[a-zA-Z]+\s[a-zA-Z]+$)|(^[a-zA-Z]+$)/.test(this.state.apellidos)){
            const req = new Request('api/users', {
                method:"POST",
                body: JSON.stringify(this.state),
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                }
            });
    
            fetch(req)
            .then(res=>{
                if (res.ok){
                    return res.json()
                } else{
                    throw 'Error on call'
                }
            })
            .then(data=>console.log(data))
            .catch(err=>console.error(err))
        }else{
            M.toast({html:"Nombre o Apellido mal"})
        }
        
    }

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
                                    <form autoComplete="off" onSubmit={this.addUser}>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input type="text" name="nombres" placeholder="Nombres" onChange={this.catchData} selected/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input type="text" name="apellidos" placeholder="Apellidos" onChange={this.catchData} selected/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="select-field col s12">
                                                <select name="tipo_documento" className="browser-default" onChange={this.catchData} selected>
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
                                                <input type="number" name="numero_documento" placeholder="Número de documento" onChange={this.catchData} selected></input>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <label>Fecha de Expedición</label>
                                            </div>
                                            <div className="input-field col s12">
                                                <input name="fecha_expedicion" type="date" onChange={this.catchData} selected></input>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <label>Fecha de Nacimiento</label>
                                            </div>
                                            <div className="input-field col s12">
                                                <input name="fecha_nacimiento" type="date" onChange={this.catchData} selected></input>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="select-field col s12">
                                                <select name="sexo" className="browser-default" onChange={this.catchData} selected>
                                                    <option value="" disabled selected>Sexo</option>
                                                    <option value="hombre">Hombre</option>
                                                    <option value="mujer">Mujer</option>
                                                    <option value="indefinido">Indefinido</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="label col s12">
                                                <label>¿Acepta <a href="api/users/terms" target="_blank">terminos y condiciones</a>?</label>
                                            </div>
                                            <div >
                                                <label className="input-field col s12">
                                                <input type="checkbox" id="test" className="browser-default filled-in" required selected/>
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