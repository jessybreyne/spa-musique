import React from 'react'

const Album = ({nom,image}) => 
    (
      <div className="card text-center">
          <div className="card-body">
            <img class="card-img-top" src={image} alt={nom}/>
            <h5 className="card-title">{nom}</h5>
          </div>
      </div>
    )

export default Album;