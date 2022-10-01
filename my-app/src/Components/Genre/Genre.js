import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import './genre.scss'

function Genre() {
  const [genre, setGenre] = useState(null)
  const navigate = useNavigate()

  const getGenres = async () => {
    const data = await ( await axios.get('http://localhost:3001/genres')).data
    setGenre(data)
  }

  useEffect( () => {
    getGenres()
  }, [])

  function handleClick(event){
    const goToMovieList = () => navigate(`/movieByGenre/${event.target.textContent}`)
    goToMovieList()
  }

  return (
    <div className='genreListContainer'>
        {
            genre && genre.map( (item) => <li className='genreName' key={item} onClick={handleClick}>{item}</li>)
        }
    </div>
  )
}

export default Genre