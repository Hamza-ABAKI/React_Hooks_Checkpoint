import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

function Movie({ movie }) {
  const { image, title, descrip, rating } = movie
  return (
    <div className='movie'>
      <Card className='movie-card'>
        <Card.Img
          style={{ width: '12rem', height: '17rem' }}
          variant='top'
          src={image}
        />
        <Card.Body style={{ padding: '0.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Rating rating={rating} />
          </div>

          <Card.Title
            style={{
              display: 'flex',
              justifyContent: 'center',
              fontSize: '1rem',
              textAlign: 'center',
            }}
          >
            {title}
          </Card.Title>
        </Card.Body>
        <div className='overview'>
          <h5>Overview </h5>
          <Card.Text style={{ fontSize: '0.9rem' }}>{descrip}</Card.Text>
        </div>
      </Card>
    </div>
  )
}

export default Movie
