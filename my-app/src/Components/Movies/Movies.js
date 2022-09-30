import React, { useEffect, useState } from 'react'
import { useNavigate} from 'react-router-dom'
import './movies.scss'

function Movies() {
  const [movies, setMovies] = useState(null)
  const navigate= useNavigate()

  useEffect( () => {
    fetch('http://localhost:3000/movies')
    .then(res => res.json())
    .then(res => setMovies(res))
  }, [])

  function clickHandler(event) {
    const goToMovieDetails = () => navigate(`/movieDetails/${event.target.textContent}`)
    goToMovieDetails()
  }
  
 

  return (
    <div className='movieListContainer'>
        {
            movies && movies.map(item => (
                <li 
                    className='movieName'
                    key={item.id}
                    onClick={clickHandler}>
                    {item.title}
                </li>))
        }
    </div>
  )
}

export default Movies