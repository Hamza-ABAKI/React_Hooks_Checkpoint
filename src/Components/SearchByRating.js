import React from 'react'
import ReactStars from 'react-rating-stars-component'

const SearchByRating = ({ setRateSearch }) => {
  return (
    <div className='rStar'>
      <h2>Filter movies by rating: </h2>
      <ReactStars
        classNames='searchStars'
        size={50}
        isHalf={false}
        onChange={setRateSearch}
      />
    </div>
  )
}

export default SearchByRating
