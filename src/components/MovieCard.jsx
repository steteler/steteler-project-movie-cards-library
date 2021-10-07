import React from 'react';
import '../App.css';

function MovieCard({ movie: { title, subtitle, imagePath } }) {
  return (
    <section>
      <div>
        <img src={ imagePath } alt={ title } />
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
      </div>
    </section>
  );
}

export default MovieCard;
