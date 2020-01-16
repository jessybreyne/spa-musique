import React from 'react'

const Artiste = ({nom,photo}) => 
    (
      <div className="card text-center">
          <div className="card-body">
            <img class="card-img-top rounded-circle" src={photo}/>
            <h5 className="card-title">{nom}</h5>
          </div>
      </div>
    )

export default Artiste;