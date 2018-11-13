import React, { Component } from 'react';
import './App.css';

class Resultados extends Component {

    constructor() {
        super();
        this.state = {
            encuentros: []
        };
    }

    componentDidMount() {
        this.obtenerEncuentros();
    }

    obtenerEncuentros(){
        // const token = this.props.token
        fetch('/encuentros', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(encuentros => {
            this.setState({encuentros})
        })
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <table className="table table-bordered table-striped table-sm shadow-lg p-3 mb-5 bg-white rounded">
                    <thead>
                        <tr className="alert alert-danger">
                        <th scope="col"><h4 className="font-italic">#</h4></th>
                        <th scope="col"><h4 className="font-italic">Local</h4></th>
                        <th scope="col"><h4 className="font-italic">Goles</h4></th>
                        <th scope="col"><h4 className="font-italic">Visitante</h4></th>
                        <th scope="col"><h4 className="font-italic">Goles</h4></th>
                        </tr>
                    </thead>
                
                    {this.state.encuentros.map((encuentro, i) => {
                        return(
                            <tbody className="alert alert-dark" key={i}>
                                {
                                    <tr>
                                        <td>{i}</td>
                                        <td>{encuentro.descripcionLocal}</td>
                                        <td>{encuentro.golesLocal}</td>
                                        <td>{encuentro.descripcionVisitante}</td>
                                        <td>{encuentro.golesVisitante}</td>
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
                                }        
                            </tbody>
                        )          
                        })
                    }
                </table>
            </div>
        );
    }
}

export default Resultados;