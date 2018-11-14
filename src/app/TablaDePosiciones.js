import React, { Component } from 'react';
import './App.css';

class TablaDePosiciones extends Component {
    
    constructor() {
        super();
        this.state = {
            equipos: [],
            fixture: [],
            encuentroSeleccionado : {}
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

    generarFixture(){
        var cantEquipos = this.state.equipos.length;

        if(cantEquipos % 2 !== 0){
            cantEquipos++
        }
        
        var n2 = (cantEquipos-1) / 2
        
        var teams = []
        for(var i = 0; i < cantEquipos; i++){
            teams[i] = i + 1
        }

        var fixture = []
        var team1 = {}
        var team2 = {}
        for(var x = 0; x < (cantEquipos * 2) - 2 ; x++){
            //console.log(`Fecha Nro ${x + 1}`)
            var fecha = {};
            fecha.nroFecha = x+1
            fecha.encuentros = [];
            for(var i = 0; i < n2; i++){
                team1 = teams[Math.ceil(n2 - i - 1)] - 1
                team2 = teams[Math.ceil(n2 + i)] - 1
                //console.log(team1 + " vs " + team2)
                //const encuentro = {local: team1, visitante: team2}
                const encuentro = { local: this.state.equipos[team1], 
                                    visitante: this.state.equipos[team2] }
                fecha.encuentros.push(encuentro)
            }
            fixture.push(fecha);
            var tmp = teams[1]
            for(var i = 1; i < teams.length-1; i++){
                teams[i] = teams[i + 1]
            }
            teams[teams.length-1] = tmp
        }
        this.setState({
            fixture
        })
        //console.log(fixture)
    }

    clickModal(encuentro){
        this.setState({
            encuentroSeleccionado: encuentro
        })
    }

    saveChanges(){
        console.log(this.state.encuentroSeleccionado.local.descripcion)
        console.log(this.state.encuentroSeleccionado.visitante.descripcion)
    }

    render() {
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

                <button type="submit" onClick={this.generarFixture.bind(this)} className="btn btn-primary bg-info">Generar Fixture</button>

                <ul className="Menu">
                    {
                        this.state.fixture.map((fecha, i) => 
                        <li key={i}>
                            Fecha Nro: {fecha.nroFecha}
                            <ul>
                                {
                                    fecha.encuentros.map((encuentro, j) =>
                                    <li key={j}>
                                        <div className="row">
                                            <div className="col border">
                                                <div style={{height:"40px", width:"40px"}}>
                                                    <img src={encuentro.local.url} className="img-fluid" alt="Responsive image"></img>
                                                </div>
                                            </div>
                                            <div className="col border">
                                                <div style={{height:"40px", width:"40px"}}>
                                                    <img src={encuentro.visitante.url} className="img-fluid" alt="Responsive image"></img>
                                                </div>
                                            </div>
                                            <div className="col border">
                                                
                                            <button type="button" onClick={this.clickModal.bind(this, encuentro)} className="btn btn-primary" data-toggle="modal" 
                                                    data-target="#exampleModal">Aplicar Resultado</button>

                                            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog" role="document">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                                                
                                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <div className="modal-body">
                                                            {
                                                                this.state.encuentroSeleccionado.local.descripcion
                                                            }
                                                            {/* <div style={{height:"40px", width:"40px"}}>
                                                                <img src={this.state.encuentroSeleccionado.local.url} className="img-fluid" alt="Responsive image"></img>
                                                            </div> */}
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                            <button type="button" onClick={this.saveChanges.bind(this)} className="btn btn-primary">Save changes</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                                
                                            </div>
                                        </div>
                                    </li>
                                    )
                                }
                            </ul>
                        </li>
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default TablaDePosiciones;