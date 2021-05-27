import React from 'react'
import AddMovie from './AddMovie.js'

import { Form, FormControl, Navbar } from 'react-bootstrap'

function NavBar({ setTitleSearch, setMovies, movies }) {
  return (
    <div className='navBar'>
      <Navbar className='bg-light justify-content-between'>
        <Form inline>
          <img style={{ width: '40px' }} src='./MovieIcon.png' alt='' />
          <h2 style={{ margin: '3px', padding: '2px', fontFamily: 'fantasy' }}>
            Movies
          </h2>
        </Form>
        <Form inline>
          <FormControl
            type='text'
            placeholder='Enter Movie Title'
            className=' mr-sm-2'
            onChange={(e) => setTitleSearch(e.target.value)}
          />
          <AddMovie setMovies={setMovies} movies={movies} />
        </Form>
      </Navbar>
    </div>
  )
}

export default NavBar
