import React, { Component } from 'react';

class FormRegister extends Component{

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
            contraseña: '',
            confirm_contraseña:''
        };

        this.catchData=this.catchData.bind(this);
        this.addUser=this.addUser.bind(this);
    }
    
    componentDidMount(){
        document.getElementsByClassName('psw')[0].maxLength="15";
        document.getElementsByClassName('psw')[1].maxLength="15";
    }

    catchData(e){
        const {name, value} = e.target
        this.setState({
            [name] : value
        })
    }
    
    addUser(e){
        e.preventDefault();
        const regExp =  /(^[a-zA-Z,á|é|í|ó|ú|Á|É|Í|Ó|Ú]+\s[a-zA-Z,á|é|í|ó|ú|Á|É|Í|Ó|Ú]+$)|(^[a-zA-Z,á|é|í|ó|ú|Á|É|Í|Ó|Ú]+$)/;
        const regExp2 = /([a-zA-Z]|[0-9]){9}/;

        fetch(`/api/users/correo/${this.state.correo}`)
        .then(res=>{
            if (res.ok){
                return res.json()
            } else {
                throw 'Error on call'
            }
        })
        .then(data=>{
            const exists = (data.exists==true) ? true : false
            return exists
        })
        .then( e=>{
            if (regExp.test(this.state.nombres) && regExp.test(this.state.apellidos) && regExp2.test(this.state.contraseña) && this.state.contraseña===this.state.confirm_contraseña && e!==true){
                const req = new Request('/api/users', {
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
                .then(data=>window.location.href="login.html")
                .catch(err=>console.error(err))
            }else{
                if (!regExp.test(this.state.nombres)){
                    M.toast({html:"Nombres invalidos"})
                }
                if(!regExp.test(this.state.apellidos)){
                    M.toast({html:"Apellidos invalidos"})
                }
                if (!regExp2.test(this.state.contraseña)){
                    M.toast({html:"Contraseña invalida"})
                }
                if (this.state.contraseña!==this.state.confirm_contraseña){
                    M.toast({html:"Las contraseñas no coinciden"})
                }
                if (e==true){
                    M.toast({html:'Este correo está vinculado a otra cuenta'})
                }
            }
        })
        .catch(err=>console.error(err))       
    }

    render(){
        return (
            <div>
                <div className="card">
                    <div className="card-content">
                        <form autoComplete="off" onSubmit={this.addUser}>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input type="text" name="nombres" placeholder="Nombres" onChange={this.catchData} required/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input type="text" name="apellidos" placeholder="Apellidos" onChange={this.catchData} required/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="select-field col s12">
                                    <select name="tipo_documento" className="browser-default" onChange={this.catchData} required>
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
                                    <input type="number" name="numero_documento" placeholder="Número de documento" onChange={this.catchData} required></input>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <label>Fecha de Expedición</label>
                                </div>
                                <div className="input-field col s12">
                                    <input name="fecha_expedicion" type="date" onChange={this.catchData} required></input>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <label>Fecha de Nacimiento</label>
                                </div>
                                <div className="input-field col s12">
                                    <input name="fecha_nacimiento" type="date" onChange={this.catchData} required></input>
                                </div>
                            </div>
                            <div className="row">
                                <div className="select-field col s12">
                                    <select name="sexo" className="browser-default" onChange={this.catchData} required>
                                        <option value="" disabled selected>Sexo</option>
                                        <option value="hombre">Hombre</option>
                                        <option value="mujer">Mujer</option>
                                        <option value="indefinido">Indefinido</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input type="number" name="numero_celular" placeholder="Número de celular" onChange={this.catchData} required></input>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input type="email" name="correo" placeholder="Correo electrónico" onChange={this.catchData} required/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="label col s12">
                                    <label>Mínimo 9 caracteres, máximo 15 caracteres, solo se permiten números y/o letras.</label>
                                </div>
                                <div className="input-field col s12">
                                    <input type="password" name="contraseña" className="psw" placeholder="Contraseña" onChange={this.catchData} required/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input type="password" name="confirm_contraseña" className="psw" placeholder="Confirmar contraseña" onChange={this.catchData} required/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="label col s12">
                                    <label>¿Acepta <a href="/api/users/terms" target="_blank">terminos y condiciones</a>?</label>
                                </div>
                                <div >
                                    <label className="input-field col s12">
                                    <input type="checkbox" className="browser-default filled-in" required/>
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
        )
    }
        
}

export default FormRegister;