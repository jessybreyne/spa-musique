import React,{Component} from 'react'
import Musique from '../components/musique'
import axios from 'axios'

const LINK_LOCALHOST = "http://127.0.0.1:8000/"
const MUSIQUES = "api/musiques.json"

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            listeMusiques:[]
        }
    }

    componentWillMount(){
        this.initMusique();
    }

    initMusique(){
        axios.get(`${LINK_LOCALHOST}${MUSIQUES}`).then(function(response){
            this.setState({currentMusique:response.data[0]});
            this.setState({listeMusiques:response.data});
            console.log(this.state.listeMusiques);
        }.bind(this));
        
    }

    render(){
        return (
            <div>
                <h1 className="mt-3 mb-3">Musiques</h1>
                <div className="row">
                    {this.state.listeMusiques.map(currentMusique => (
                        <div className="col-4">
                        <Musique title={currentMusique.titre} date={new Intl.DateTimeFormat('fr-FR', {month: 'long', day: '2-digit', year: 'numeric',}).format(new Date(currentMusique.date))} MUSIQUE_LINK={currentMusique.link}/>  
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default App;