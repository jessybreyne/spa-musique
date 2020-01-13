import React from 'react'

const MusiqueListItem = (props) =>{
    const {musique} = props;
    return (
        <li className="list-group-item">
            <div className="media">
                <div className="media-left">
                    <img className="media-object img-rounded img-VideoListItem" src={`${musique.albu}`} alt={movie.title}></img>
                </div>
            <div className="media-body">
                <h5 className="title-list-item">{movie.title}</h5>
            </div>
            </div>
        </li>
    )
    function handleOnClick(){
        props.callback(movie);
    }
}
export default MusiqueListItem;