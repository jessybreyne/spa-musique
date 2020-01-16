import React,{Component} from 'react'
import MusiqueList from './musique-list'
import ArtisteList from './artiste-list'
import AlbumList from './album-list'
import axios from 'axios'

const LINK_LOCALHOST = "http://127.0.0.1:8000/"
const ARTISTES = "api/artistes"
const ALBUMS = "api/albums"
const EXT_JSON = ".json"

class App extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <h1> Mes musiques </h1>
                <MusiqueList/>
                <ArtisteList/>
                <AlbumList/>
            </div>
        )
    }
}

export default App;