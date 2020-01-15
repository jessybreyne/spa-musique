import React,{Component} from 'react'
import Musique from '../components/musique'
import axios from 'axios'

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
                    <Musique title={this.state.currentMusique.titre} date={this.state.currentMusique.date} MUSIQUE_LINK={this.state.currentMusique.link}/>  
                </div>
            </div>
        )
    }
}

export default App;