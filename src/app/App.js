import React, { Component } from 'react';
import TablaDePosiciones from './TablaDePosiciones';
import FormEncuentro from './FormEncuentro';
import Encuentros from './Encuentros';
import Fixture from './Fixture';
import './App.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            nombres : ["rodrigo", "fernando", "giovani", "camila", "nahuel"],
            nombreSeleccionado : ""
        };
    }

    clickModal(nombreSeleccionado){
        this.setState({
            nombreSeleccionado
        })
    }

    render() {
        return (
            <div className="App">
                <div className="row">
                    <div className="col-1">

                    </div>
                    <div className="col-10 border">
                        {/* <ul className="Menu">
                        {
                            this.state.nombres.map((nombre, i) => 
                            <li key={i}>
                                {nombre} 
                                <button type="button" onClick={this.clickModal.bind(this, nombre)} className="btn btn-primary" data-toggle="modal" 
                                                    data-target="#exampleModal">Aplicar Resultado</button>

                                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                                    {this.state.nombreSeleccionado}
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                ...
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            )
                        }
                        </ul> */}
                                








                        <TablaDePosiciones/>
                        {/* <Fixture/> */}
                        {/* <FormEncuentro/> */}
                        {/* <Encuentros/> */}
                    </div>
                    <div className="col-1">

                    </div>
                </div>
            </div>
        );
    }
}

export default App;