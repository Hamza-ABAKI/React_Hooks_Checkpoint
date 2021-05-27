import React, { useState } from 'react'

import './App.css'
import NavBar from './Components/NavBar.js'
import MovieList from './Components/MovieList.js'
import { moviesData } from './Components/MovieData.js'
import SearchByRating from './Components/SearchByRating.js'

function App() {
  const [rateSearch, setRateSearch] = useState(0)
  const [titleSearch, setTitleSearch] = useState('')
  const [movies, setMovies] = useState(moviesData)

  return (
    <div className='App'>
      <NavBar
        setTitleSearch={setTitleSearch}
        setMovies={setMovies}
        movies={movies}
      />

      <SearchByRating setRateSearch={setRateSearch} />

      <MovieList
        movies={movies}
        titleSearch={titleSearch}
        rateSearch={rateSearch}
      />
    </div>
  )
}

export default App
