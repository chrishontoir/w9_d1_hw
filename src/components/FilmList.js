import React, {Component} from 'react';
import Film from './Film';

class FilmList extends Component {

  render(){

    const filmNodes = this.props.data.map(film => {
      return(
        <Film name={film.name} key={film.id} url={film.url} />
      )
    })
    return(
      <ul className="film-list">
        {filmNodes}
      </ul>
    )
  }
}

export default FilmList;
