import React from 'react'
import Movie from './Movie.js'

function MovieList({ movies, titleSearch, rateSearch }) {
  const filter = () => {
    let tableAfterSearch =
      rateSearch === 0
        ? movies.filter((movie) =>
            movie.title.toLowerCase().includes(titleSearch.toLowerCase())
          )
        : movies.filter(
            (movie) =>
              movie.title
                .toLowerCase()
                .includes(titleSearch.toLowerCase().trim()) &&
              movie.rating === rateSearch
          )
    console.log(tableAfterSearch)
    return tableAfterSearch
  }

  return (
    <div className='movielist'>
      {filter().map((movie, i) => {
        return (
          <div key={i}>
            <Movie movie={movie} />
          </div>
        )
      })}
    </div>
  )
}

export default MovieList
