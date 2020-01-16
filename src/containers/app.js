import React,{Component} from 'react'
import MusiqueList from './musique-list'
import ArtisteList from './artiste-list'
import AlbumList from './album-list'

class App extends Component{

    render(){
        return (
            <div>
                <MusiqueList/>
                <ArtisteList/>
                <AlbumList/>
            </div>
        )
    }
}

export default App;