import React, { Component } from 'react';
import './App.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            equipos: []
        };
    }

    componentDidMount() {
        this.obtenerEquipos();
    }

    obtenerEquipos(){
        // const token = this.props.token
        fetch('/equipos', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(equipos => {
            this.setState({equipos})
        })
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="App">
                <table className="table table-bordered table-striped table-sm shadow-lg p-3 mb-5 bg-white rounded">
                    <thead>
                        <tr className="alert alert-danger">
                        <th scope="col"><h4 className="font-italic">#</h4></th>
                        <th scope="col"><h4 className="font-italic">Descripcion</h4></th>
                        <th scope="col"><h4 className="font-italic">Pts</h4></th>
                        <th scope="col"><h4 className="font-italic">PJ</h4></th>
                        <th scope="col"><h4 className="font-italic">PE</h4></th>
                        <th scope="col"><h4 className="font-italic">PP</h4></th>
                        <th scope="col"><h4 className="font-italic">GF</h4></th>
                        <th scope="col"><h4 className="font-italic">GC</h4></th>
                        <th scope="col"><h4 className="font-italic">DF</h4></th>
                        <th scope="col"><h4 className="font-italic">Opciones</h4></th>
                        </tr>
                    </thead>
                    
                    {this.state.equipos.map((equipo, i) => {
                        return(
                            <tbody className="alert alert-dark" key={i}>
                                <tr>
                                    <td>{i}</td>
                                    <td>{equipo.descripcion}</td>
                                    <td>{equipo.puntos}</td>
                                    <td>{equipo.ganados}</td>
                                    <td>{equipo.empatados}</td>
                                    <td>{equipo.perdidos}</td>
                                    <td>{equipo.golesAFavor}</td>
                                    <td>{equipo.golesEnContra}</td>
                                    <td>{equipo.diferenciaDeGoles}</td>
                                    <td>
                                        <div className="form-row">
                                        <div className="col">
                                            <h6><button className = "badge badge-pill badge-info">Edit</button></h6>
                                        </div>
                                        <div className="col">
                                            <h6><button className = "badge badge-pill btn btn-danger">Delete</button></h6>
                                        </div>
                                        </div>  
                                    </td>
                                </tr>      
                            </tbody>
                        )          
                        })
                    }
                </table>
            </div>
        );
    }
}

export default App;