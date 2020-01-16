import React from 'react'

const Musique = ({MUSIQUE_LINK,title,date,categories}) => 
    (
      <div className="card">
          <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src={"https://w.soundcloud.com/player/?url="+`${MUSIQUE_LINK}`+"&auto_play=true&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false"}></iframe>
          <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{date}</p>
              {categories.map(categorie => (
                <p className="card-text">{categorie.nom}</p>
            ))}
          </div>
      </div>
    )

export default Musique;