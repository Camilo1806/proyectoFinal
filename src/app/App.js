import React, { Component } from 'react';

class App extends Component { 

    constructor(){
        super();
        this.state= {
            title: '',
            description: '',
            tasks: [],
            _id: ''
        };
        this.addTask=this.addTask.bind(this);
        this.handleChange=this.handleChange.bind(this)
    };

    addTask(e){
        if (this.state._id){
            const req = new Request(
                `/api/tasks/${this.state._id}`,
                {
                    method: 'PUT',
                    body: JSON.stringify(this.state),
                    headers: {
                        'Accept':'application/json',
                        'Content-Type' : 'application/json'
                    } 
                }
            )

            fetch(req)
            .then(res=>{
                if (res.ok){
                    return res.json()
                }else{
                    throw 'Error on call'
                }
            })
            .then(data=>{
                console.log(data);
                M.toast({html:'Task updated'});
                this.setState({
                    title:'', description: '', _id:''
                })
                this.fetchTasks();
            })
            .catch(err=>console.log(err))
        } else {
            const req = new Request('/api/tasks',{  
                method: 'POST',
                body : JSON.stringify(this.state),
                headers:{
                    'Accept' : 'application/json',
                    'Content-Type':"application/json"
                }
            });
    
            fetch(req)
            .then(res=>{
                if (res.ok){
                    return res.json()
                } else {
                    throw 'Error en la llamada'
                }
            })
            .then(data=>{
                console.log(data);
                M.toast({html:'Task saved'});
                this.setState({title:'',description:''});
                this.fetchTasks();
            })
            .catch(err=>console.error(err))
        }

        e.preventDefault()
    };

    componentDidMount(){
        this.fetchTasks()
    }

    fetchTasks(){
        const URL = '/api/tasks';

        fetch(URL)
        .then(res=>{
            if (res.ok){
                return res.json()
            } else {
                throw 'Error on call'
            }
        })
        .then(data=>{
            this.setState({
                tasks: data
            });
        })
        .catch(err=>console.error(err))
    }

    deleteTask(id){
        if (confirm('Are you sure you want to delete it?')){
            console.log(`Deleting: ${id}`);
        const req = new Request(`/api/tasks/${id}`, {
            method: 'DELETE',
        })
        fetch(req)
        .then(res=>{
            if (res.ok){
                return res.json()
            }else{
                throw 'Error on call'
            }
        })
        .then(res=>{
            console.log(res);
            M.toast({html:'Task deleted'});
            this.fetchTasks();
        })
        .catch(err=>console.log(err));
        }
    }

    editTask(id,title,description){
        const URL = `/api/tasks/${id}`
        fetch(URL)
        .then(res=>{
            if (res.ok){
                return res.json()
            } else {
                throw 'Error on call'
            }
        })
        .then(data=>{
            this.setState({
                title: data.title,
                description: data.description,
                _id : data._id
            })
        })
        .catch(err=>console.log(err))

        // console.log(`Title: ${title}\nDescription: ${description}`)
    }

    handleChange(e){
        const { name , value } = e.target
        this.setState({
            [name] : value
        })
    }

    render(){
        return(
            <div>
                {/* Navigation */}
                <nav className="light-blue darken-4">
                    <div className="container">
                        <a className="brand-logo" href="/">MERN Stack</a>
                    </div>
                </nav> 

                <div className="container">
                    <div className="row">
                        <div className="col s5">
                            <div className="card">
                                <div className="card-content">
                                    <form onSubmit={this.addTask} autoComplete="off">
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input type="text" name="title" onChange={this.handleChange} placeholder="Task title" value={this.state.title} required/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <textarea className="materialize-textarea" name="description" onChange={this.handleChange} placeholder="Task description" value={this.state.description} required></textarea>
                                            </div>
                                        </div>
                                        <button className="btn light-blue darken-4" type="submit">
                                            SEND
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col s7">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.tasks.map(task=>{
                                            return(
                                                <tr key={task._id}>
                                                    <td>{task.title}</td>
                                                    <td>{task.description}</td>
                                                    <td>
                                                        <button className="btn light-blue darken-4" onClick={()=>this.editTask(task._id,task.title,task.description)}>
                                                            <i className="material-icons">edit</i>
                                                        </button>
                                                        <button className="btn light-blue darken-4" style={{margin:"5px"}} onClick={()=>this.deleteTask(task._id)}>
                                                            <i className="material-icons">delete</i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default App;