import React from 'react'
import ReactStars from 'react-rating-stars-component'

const SearchByRating = ({ setRateSearch }) => {
  return (
    <div className='rStar'>
      <h2>Filter Movies by their rating: </h2>
      <ReactStars size={50} onChange={setRateSearch} />
    </div>
  )
}

export default SearchByRating
