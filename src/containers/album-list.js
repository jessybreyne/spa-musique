import React,{Component} from 'react'
import Album from '../components/album'
import axios from 'axios'

const LINK_LOCALHOST = "http://127.0.0.1:8000/"
const ALBUMS = "api/albums"
const EXT_JSON = ".json"

class AlbumList extends Component{
    constructor(props){
        super(props)
        this.state = {
            listeAlbums:[],
        }
    }

    componentDidMount(){
        this.initAlbums();
    }
    initAlbums(){
        axios.get(`${LINK_LOCALHOST}${ALBUMS}${EXT_JSON}`).then(function(response){
            this.setState({listeAlbums:response.data});
        }.bind(this)); 
    }

    render(){
        return(
        <div className=''>
            <h1 className="mt-3 mb-3">Albums</h1>
            <div className="row mb-md-2">
                {this.state.listeAlbums.map(currentAlbum => (
                    <div className="col-4 mt-md-2 ">
                        <Album nom={currentAlbum.nom} image={currentAlbum.image}/>  
                    </div>
                ))}
            </div>
        </div>
        )
    }
}

export default AlbumList;