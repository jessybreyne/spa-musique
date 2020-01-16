import React,{Component} from 'react'
import Artiste from '../components/artiste'
import axios from 'axios'

const LINK_LOCALHOST = "http://127.0.0.1:8000/"
const ARTISTES = "api/artistes"
const EXT_JSON = ".json"

class ArtisteList extends Component{
    constructor(props){
        super(props)
        this.state = {
            listeArtistes:[],
        }
    }

    componentDidMount(){
        this.initArtistes();
    }
    initArtistes(){
        axios.get(`${LINK_LOCALHOST}${ARTISTES}${EXT_JSON}`).then(function(response){
            this.setState({listeArtistes:response.data});
        }.bind(this)); 
    }

    render(){
        return(
        <div>
            <h1 className="mt-3 mb-3">Artistes</h1>
            <div className="row">
                {this.state.listeArtistes.map(currentArtiste => (
                    <div className="col-4">
                        <Artiste nom={currentArtiste.nom} photo={currentArtiste.photo}/>  
                    </div>
                ))}
            </div>
        </div>
        )
    }
}

export default ArtisteList;