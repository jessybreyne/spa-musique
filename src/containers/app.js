import React,{Component} from 'react'
import Musique from '../components/musique'
import Artiste from '../components/artiste'
import Album from '../components/album'
import axios from 'axios'

const LINK_LOCALHOST = "http://127.0.0.1:8000/"
const MUSIQUES = "api/musiques"
const ARTISTES = "api/artistes"
const ALBUMS = "api/albums"
const EXT_JSON = ".json"

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            listeMusiques:[],
            listeArtistes:[],
            listeAlbums:[]
        }
    }

    componentDidMount(){
        this.initMusiques();
        this.initArtistes();
        this.initAlbums();
    }

    initMusiques(){
        axios.get(`${LINK_LOCALHOST}${MUSIQUES}${EXT_JSON}`).then(function(response){
            this.setState({listeMusiques:response.data});
            console.log(this.state.listeMusiques);
        }.bind(this)); 
    }
    initArtistes(){
        axios.get(`${LINK_LOCALHOST}${ARTISTES}${EXT_JSON}`).then(function(response){
            this.setState({listeArtistes:response.data});
        }.bind(this)); 
    }
    initAlbums(){
        axios.get(`${LINK_LOCALHOST}${ALBUMS}${EXT_JSON}`).then(function(response){
            this.setState({listeAlbums:response.data});
        }.bind(this)); 
    }

    render(){
        return (
            <div>
                <h1 className="mt-3 mb-3">Musiques</h1>
                <div className="row">
                    {this.state.listeMusiques.map(currentMusique => (
                        <div className="col-4">
                        <Musique title={currentMusique.titre} date={new Intl.DateTimeFormat('fr-FR', {month: 'long', day: '2-digit', year: 'numeric',}).format(new Date(currentMusique.date))} MUSIQUE_LINK={currentMusique.link} categories={currentMusique.categories}/>  
                        </div>
                    ))}
                </div>
                <h1 className="mt-3 mb-3">Artistes</h1>
                <div className="row">
                {this.state.listeArtistes.map(currentArtiste => (
                    <div className="col-4">
                        <Artiste nom={currentArtiste.nom} photo={currentArtiste.photo}/>  
                    </div>
                ))}
                </div>
                <h1 className="mt-3 mb-3">Albums</h1>
                <div className="row">
                {this.state.listeAlbums.map(currentAlbum => (
                    <div className="col-4">
                        <Album nom={currentAlbum.nom} image={currentAlbum.image}/>  
                    </div>
                ))}
                </div>
            </div>
        )
    }
}

export default App;