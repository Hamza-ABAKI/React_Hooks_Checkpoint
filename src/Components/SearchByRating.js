import React from 'react'
import { Button } from 'react-bootstrap'
import StarRatings from 'react-star-ratings'

const SearchByRating = ({ setRateSearch, rateSearch }) => {
  const changeRating = (newRating) => setRateSearch(newRating)
  return (
    <div className='rStar'>
      <h2>Filter movies by rating: </h2>

      <div className='searchStars'>
        <StarRatings
          rating={rateSearch}
          starRatedColor='#F9AB21'
          changeRating={changeRating}
          numberOfStars={5}
          name='rating'
        />
      </div>
      <div className='reset-btn'>
        <Button variant='light' size='sm' onClick={() => setRateSearch(0)}>
          Reset
        </Button>{' '}
      </div>
    </div>
  )
}

export default SearchByRating
