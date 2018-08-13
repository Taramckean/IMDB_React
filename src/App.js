import React, { Component } from 'react';
import FilmShowingsList from './components/FilmShowingsList.js'


class App extends Component {
  render() {

    const films = [{name: "The Heiresses", url: "https://www.imdb.com/showtimes/title/tt7875464/UK/G5%200UH?ref_=sh_ov_tt"},
     {name: "The Negotiator", url: "https://www.imdb.com/showtimes/title/tt0120768/UK/G5%200UH?ref_=sh_ov_tt"},
    {name: "Under the Tree", url:"https://www.imdb.com/showtimes/title/tt6223806/UK/G5%200UH?ref_=sh_ov_tt"},
    {name: "The Escape", url: "https://www.imdb.com/showtimes/title/tt6069126/UK/G5%200UH?ref_=sh_ov_tt"},
    {name: "Dog Days", url: "https://www.imdb.com/showtimes/title/tt7365604/UK/G5%200UH?ref_=sh_ov_tt"},
    {name: "The Darkest Minds", url: "https://www.imdb.com/showtimes/title/tt4073790/UK/G5%200UH?ref_=sh_ov_tt"},
    {name: "Jurassic World: Fallen Kingdom", url:"https://www.imdb.com/showtimes/title/tt4881806/UK/G5%200UH?ref_=sh_ov_tt"}];

    return (
        <FilmShowingsList films={films}/>
    );
  }
}

export default App;
