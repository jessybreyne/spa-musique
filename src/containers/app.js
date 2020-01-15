import React,{Component} from 'react'
import Musique from '../components/musique'
import axios from 'axios'
import MusiqueDetail from '../components/musique-detail'

const LINK_LOCALHOST = "http://127.0.0.1:8000/"
const MUSIQUES = "api/musiques.json"

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            currentMusique:{}
        }
    }

    componentWillMount(){
        this.initMusique();
    }

    initMusique(){
        axios.get(`${LINK_LOCALHOST}${MUSIQUES}`).then(function(response){
            this.setState({currentMusique:response.data[0]});

        }.bind(this));
    }

    render(){
        return (

                <div className="row">
                    <div className="col-4">
                        <div className="card">
                            <Musique MUSIQUE_LINK={this.state.currentMusique.link}/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <MusiqueDetail title={this.state.currentMusique.titre} date={this.state.currentMusique.date} />
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-4">
                        <div className="card">
                            <Musique MUSIQUE_LINK={this.state.currentMusique.link}/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <MusiqueDetail title={this.state.currentMusique.titre} date={this.state.currentMusique.date} />
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="card">
                            <Musique MUSIQUE_LINK={this.state.currentMusique.link}/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <MusiqueDetail title={this.state.currentMusique.titre} date={this.state.currentMusique.date} />
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                </div>
    
        )
    }
}

export default App;