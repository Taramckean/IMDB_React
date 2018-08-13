import React from 'react';

const FilmShowing = (props) => {
  return(
    <div className="film-showing">
    <p>{props.film.name}</p>
  <a href={props.film.url}>Showtimes</a>
</div>
  )
}

export default FilmShowing;
