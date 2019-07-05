import React,{ Component } from 'react';

class FormLogin extends Component{

    constructor(){
        super();
        this.state={
            correo: '',
            contraseña: ''
        }

        this.catchData=this.catchData.bind(this)
        this.login=this.login.bind(this)
    }

    catchData(e){
        const { name, value } = e.target;
        this.setState({
            [name]:value
        });
    }

    login(e){
        e.preventDefault();
        
        const req = new Request('/api/users/login', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        
        fetch(req)
        .then(res=>{
            if (res.ok){
                return res.json()
            }else{
                throw 'Error on call'
            }
        })
        .then(data=>{
            if (data.user==true){
                (data.perm==true) ? window.location.href="login.html" : M.toast({html:'Contraseña incorrecta'})
            }else{
                M.toast({html:'El usuario no existe'})
            }
        })
        .catch(err=>console.error(err))
    }

    render(){
        return (
            <div>
                <div className="card">
                    <div className="card-content">
                        <form autoComplete="off" onSubmit={this.login}>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input type="email" name="correo" placeholder="Correo electrónico" onChange={this.catchData} required/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input type="password" name="contraseña" placeholder="Contraseña" onChange={this.catchData} required/>
                                </div>
                            </div>
                            <div className="container">
                                <button className="btn light-blue darken-4" type="submit">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default FormLogin;