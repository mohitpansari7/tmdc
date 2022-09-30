import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './genre.scss'

function Genre() {
  const [genre, setGenre] = useState(null)
  const navigate = useNavigate()

  useEffect( () => {
    fetch('http://localhost:3000/movies')
    .then(res => res.json())
    .then(res => {
        console.log(res)
        let result = []
        res.map(item => {
            item.genres.forEach(element => {
                if ( !result.includes(element) ){
                    result.push(element)
                }
            });
        return result
        })
        setGenre(result)
    })
  }, [])

  function handleClick(event){
    const goToMovieList = () => navigate(`/movieByGenre/${event.target.textContent}`)
    goToMovieList()
  }

  return (
    <div className='genreListContainer'>
        {
            genre && genre.map( (item, index) => <li className='genreName' key={item} onClick={handleClick}>{item}</li>)
        }
    </div>
  )
}

export default Genre