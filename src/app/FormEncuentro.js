import React, { Component } from 'react';
import './App.css';

class FormEncuentro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            equipos: [],
            equipoLocal: {},
            equipoVisitante: {}
        }
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

    handleInputChange(e) {
        const {value, name} = e.target;
        // console.log(value, name);
        this.setState({
          [name]: value
        });
    }

    equipoLocalSeleccionado(i){
        this.setState({
            equipoLocal: this.state.equipos[i]
        })
    }

    equipoVisitanteSeleccionado(i){
        this.setState({
            equipoVisitante: this.state.equipos[i]
        })
    }

    generarEncuentro(){
        // let token = this.props.token;
        // console.log(this.state.equipoLocal.url)
        // console.log(this.state.equipoVisitante.url)

        const date = new Date();
        const dia = date.getDate();
        const mes = date.getMonth() + 1;
        const anio = date.getFullYear();
        const fecha = dia+"/"+mes+"/"+anio;
        fetch(`/encuentros`, {
            method: 'POST',
            body: JSON.stringify({
                        fecha: fecha,
                        idLocal: this.state.equipoLocal._id,
                        descripcionLocal: this.state.equipoLocal.descripcion,
                        urlLocal: this.state.equipoLocal.url,
                        golesLocal: 0,
                        idVisitante: this.state.equipoVisitante._id,
                        descripcionVisitante: this.state.equipoVisitante.descripcion,
                        urlVisitante: this.state.equipoVisitante.url,
                        golesVisitante: 0
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState({ equipoLocal: {}, equipoVisitante: {}});
        })
        .catch(err => console.error(err));
    
    }

    render() {

        return (
            <div className="App row">
                <div className="col-2 border">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Local</button>
                            <div className="dropdown-menu">
                                {
                                    this.state.equipos.map((equipo, i) => {
                                        return(
                                            <a key={i} className="dropdown-item" onClick={this.equipoLocalSeleccionado.bind(this, i)}>{equipo.descripcion}</a>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-8 border">
                    <div className="row">
                        <div className="col">
                            <div style={{height:"40px", width:"40px"}}>
                                <img src={this.state.equipoLocal.url} className="img-fluid" alt="Responsive image"></img>
                            </div>
                        </div>
                        <div className="col">
                            <button type="submit" onClick={this.generarEncuentro.bind(this)} className="btn btn-primary bg-info">Partido</button>
                        </div>
                        <div className="col">
                            <div style={{height:"40px", width:"40px"}}>
                                <img src={this.state.equipoVisitante.url} className="img-fluid" alt="Responsive image"></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-2 border">
                    <div className="input-group">
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Visitante</button>
                            <div className="dropdown-menu">
                                {
                                    this.state.equipos.map((equipo, i) => {
                                        return(
                                            <a key={i} className="dropdown-item" onClick={this.equipoVisitanteSeleccionado.bind(this, i)}>{equipo.descripcion}</a>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormEncuentro;