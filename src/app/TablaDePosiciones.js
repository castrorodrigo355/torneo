import React, { Component } from 'react';
import './App.css';

class tablaDePosiciones extends Component {

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
        // <img src={ruta} className="h-10" alt="Responsive image"></img>
        const ruta= "data:image/jpeg;base64,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";
        return (
            <div>
                <table className="table table-sm">
                    <thead>
                        <tr className="alert alert-danger">
                        <th scope="col"><h4 className="font-italic">#</h4></th>
                        <th scope="col"><h4 className="font-italic">Equipo</h4></th>
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
                                    <td>{i + 1}</td>
                                    <td>
                                        <div style={{height:"40px", width:"40px"}}>
                                            <img src={equipo.url} className="img-fluid" alt="Responsive image"></img>
                                        </div>
                                                                </td>
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

export default tablaDePosiciones;