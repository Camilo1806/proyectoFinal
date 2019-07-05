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
            sexo: '',
            numero_celular: '',
            correo: '',
            contraseña: ''
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
        const regExp = /(^[a-zA-Z,á|é|í|ó|ú|Á|É|Í|Ó|Ú]+\s[a-zA-Z,á|é|í|ó|ú|Á|É|Í|Ó|Ú]+$)|(^[a-zA-Z,á|é|í|ó|ú|Á|É|Í|Ó|Ú]+$)/;
        const regExp2 = /([a-zA-Z]|[0-9]){9}/;
        if (regExp2.test(this.state.contraseña)){
            console.log('bien')
        } else{
            console.log('mal')
        }
    //     if (regExp.test(this.state.nombres) && regExp.test(this.state.apellidos) ){
    //         const req = new Request('api/users', {
    //             method:"POST",
    //             body: JSON.stringify(this.state),
    //             headers:{
    //                 'Accept':'application/json',
    //                 'Content-Type':'application/json'
    //             }
    //         });
    
    //         fetch(req)
    //         .then(res=>{
    //             if (res.ok){
    //                 return res.json()
    //             } else{
    //                 throw 'Error on call'
    //             }
    //         })
    //         .then(data=>console.log(data))
    //         .catch(err=>console.error(err))
    //     }else{
    //         const a = (!regExp.test(this.state.nombres)) ? 1 : 0;
    //         const b = (!regExp.test(this.state.apellidos)) ? 2 : 0;
    //         const total = a + b

    //         switch (total){
    //             case 3:
    //                 M.toast({html:"Nombres y apellidos invalidos"});
    //             break;
    //             case 2:
    //                 M.toast({html:"Apellidos invalidos"});
    //             break;
    //             case 1:
    //                 M.toast({html:"Nombres invalidos"});
    //             break;
    //         }
    //     }
        
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
                                            <div className="input-field col s12">
                                                <input type="number" name="numero_celular" placeholder="Número de celular" onChange={this.catchData} selected></input>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input type="email" name="correo" placeholder="Correo electronico" onChange={this.catchData} selected/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="label col s12">
                                                <label>Minimo 9 caracteres, solo se permiten números y/o letras.</label>
                                            </div>
                                            <div className="input-field col s12">
                                                <input type="password" name="contraseña" placeholder="Contraseña" onChange={this.catchData} selected/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input type="password" name="confirm_contraseña" placeholder="Confirmar contraseña" onChange={this.catchData} selected/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="label col s12">
                                                <label>¿Acepta <a href="api/users/terms" target="_blank">terminos y condiciones</a>?</label>
                                            </div>
                                            <div >
                                                <label className="input-field col s12">
                                                <input type="checkbox" className="browser-default filled-in" selected/>
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