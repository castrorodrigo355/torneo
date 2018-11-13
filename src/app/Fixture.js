import React, { Component } from 'react';
import './App.css';

class Fixture extends Component {

    generarFixture(){
        var equipos = ["river","boca","racing","barcelona","madrid","chelsea"]

        var cantEquipos = equipos.length;

        if(cantEquipos % 2 !== 0){
            cantEquipos++
        }
        
        var n2 = (cantEquipos-1) / 2
        
        var teams = new Array()
        for(var i = 0; i < cantEquipos; i++){
            teams[i] = i + 1
        }

        var fixture = new Array()
        var team1 = ""
        var team2 = ""
        for(var x = 0; x < (cantEquipos * 2) - 2 ; x++){
            console.log(`Fecha Nro ${x + 1}`)
            var fecha = {};
            fecha.nroFecha = x+1
            fecha.encuentros = [];
            for(var i = 0; i < n2; i++){
                team1 = teams[Math.ceil(n2 - i - 1)] - 1
                team2 = teams[Math.ceil(n2 + i)] - 1
                console.log(team1 + " vs " + team2)
                const encuentro = {local: equipos[team1], visitante: equipos[team2]}
                fecha.encuentros.push(encuentro)
            }
            fixture.push(fecha);
            var tmp = teams[1]
            for(var i = 1; i < teams.length-1; i++){
                teams[i] = teams[i + 1]
            }
            teams[teams.length-1] = tmp
        }
        console.log(fixture)
        
    }

    render() {
        return (
            <div className="App">
                <button type="submit" onClick={this.generarFixture.bind(this)} className="btn btn-primary bg-info">Generar Fixture</button>
                
            </div>
        );
    }
}

export default Fixture;