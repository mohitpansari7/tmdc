import React, { useEffect, useState } from 'react'
import {useParams, useNavigate } from 'react-router-dom'
import './movieByGenre.scss'

function MovieByGenre() {
  const navigate = useNavigate()
  const {genre} = useParams()
  const [movies, setMovies] = useState(null)

  useEffect( () => {
    fetch('http://localhost:3000/movies')
    .then(res => res.json())
    .then(res => {
        let result = res.filter(item => item.genres.includes(genre))
        setMovies(result)
    })
  }, [genre])
  
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