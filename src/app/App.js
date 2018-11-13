import React, { Component } from 'react';
import TablaDePosiciones from './TablaDePosiciones';
import FormEncuentro from './FormEncuentro';
import Encuentros from './Encuentros';
import './App.css';

class App extends Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-1">

                    </div>
                    <div className="col-10">
                        <TablaDePosiciones/>
                        <FormEncuentro/>
                        <Encuentros/>
                    </div>
                    <div className="col-1">

                    </div>
                </div>
            </div>
        );
    }
}

export default App;