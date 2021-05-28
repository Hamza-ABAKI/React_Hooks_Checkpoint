import React from 'react'
import { Button } from 'react-bootstrap'
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
      <div className='reset-btn'>
        <Button variant='light' size='sm' onClick={() => setRateSearch(0)}>
          Reset
        </Button>{' '}
      </div>
    </div>
  )
}

export default SearchByRating
