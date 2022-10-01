import React, { useEffect, useState } from 'react'
import { useNavigate} from 'react-router-dom'
import axios from 'axios'
import './movies.scss'

function Movies() {
  const [movies, setMovies] = useState(null)
  const navigate= useNavigate()

  const getMovieNames = async () => {
    const data = await (await axios.get('http://localhost:3001/movieNames')).data
    setMovies(data)
  }
  
  useEffect( () => {
    getMovieNames()
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