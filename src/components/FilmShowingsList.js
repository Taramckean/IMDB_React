import React from 'react';
import FilmShowing from './FilmShowing.js'

const FilmShowingsList = (props) => {
  const FilmShowingsOptions = props.films.map(filmShowing =>{
    return (
      <FilmShowing film={filmShowing}/>
    )
  })
  return <div className="film-showing-list">
    <h1>Film Showings</h1>
    {FilmShowingsOptions}</div>
}

export default FilmShowingsList;
