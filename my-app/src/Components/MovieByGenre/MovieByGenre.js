import React, { useCallback, useEffect, useState } from 'react'
import {useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './movieByGenre.scss'

function MovieByGenre() {
  const navigate = useNavigate()
  const {genre} = useParams()
  const [movies, setMovies] = useState(null)

  const getMovieByGenre = useCallback( async () => {
    const data = await ( await axios.get('http://localhost:3001/movieByGenre', {params: {"genre":genre}})).data
    setMovies(data)
  }, [genre])
 
  useEffect( () => {
    getMovieByGenre()
  }, [getMovieByGenre])
  
  function clickHandler(event) {
    const goToMovieDetails = () => navigate(`/movieDetails/${event.target.textContent}`)
    goToMovieDetails()
  }

  return (
    <div>
        <h3>Movies By Genre - {genre}</h3>
        {movies && movies.map(item => <li key={item.id} onClick={clickHandler} className='movieList'>{item.title}</li>)}
    </div>
  )
}

export default MovieByGenre