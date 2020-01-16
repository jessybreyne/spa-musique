import React,{Component} from 'react'
import Musique from '../components/musique'
import axios from 'axios'

const LINK_LOCALHOST = "http://127.0.0.1:8000/"
const MUSIQUES = "api/musiques"
const EXT_JSON = ".json"

class MusiqueList extends Component{
    constructor(props){
        super(props)
        this.state = {
            listeMusiques:[],
        }
    }

    componentDidMount(){
        this.initMusiques();
    }
    initMusiques(){
        axios.get(`${LINK_LOCALHOST}${MUSIQUES}${EXT_JSON}`).then(function(response){
            this.setState({listeMusiques:response.data});
        }.bind(this)); 
    }

    render(){
        return(
        <div>
            <h1 className="mt-3 mb-3">Musiques</h1>
            <div className="row">
                    {this.state.listeMusiques.map(currentMusique => (
                    <div className="col-4">
                        <Musique title={currentMusique.titre} date={new Intl.DateTimeFormat('fr-FR', {month: 'long', day: '2-digit', year: 'numeric',}).format(new Date(currentMusique.date))} MUSIQUE_LINK={currentMusique.link} categories={currentMusique.categories}/>  
                    </div>
                ))}
            </div>
        </div>
        )
    }
}

export default MusiqueList;