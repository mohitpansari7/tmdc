import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './movieDetails.scss'
import axios from 'axios'

function MovieDetails() {

    const { movieName } = useParams()
    const [movie, setMovie] = useState(null)
    const [isTitleEditable, setIsTitleEditable] = useState(false)
    const [isStoryEditable, setIsStoryEditable] = useState(false)

    useEffect(() => {
        fetch('http://localhost:3000/movies')
            .then(res => res.json())
            .then(res => {
                let result = res.filter(item => item.title === movieName)
                setMovie(...result)
            })
    }, [movieName])

    function handleSave() {
        const url = `http://localhost:3000/movies/${movie.id}`
        console.log(url)
        axios.put(url, movie)
            .then((res) => {
                console.log('Success')
                setIsTitleEditable(false)
                setIsStoryEditable(false)
            })
            .catch((err) => {
                console.error('Server Error', err)
            })
    }

    function handleTitleChange(e) {
        let newTitle = e.target.value
        setMovie( movie => {
            return { ...movie, title : newTitle}
        })
    }

    function handleStoryChange(e) {
        let newStory = e.target.value
        setMovie(movie => {
            return {...movie, storyline : newStory}
        })
    }

    return (
        <div className='cardContainer'>
            <h3>Movie Details {movie && movie.title}</h3>
            {movie && <div className="card" style={{ "width": "18rem", "display": "inline-flex" }}>
                <img className="card-img-top" src={movie.posterurl} alt="Cardimagecap" />
                <div className="card-body">
                    {isTitleEditable ? <div><input className='rounded' defaultValue={movie.title} onChange=
                        {handleTitleChange} ></input><button className="tickButton" onClick={() => setIsTitleEditable(false)}>✓</button></div> : <h5 onDoubleClick={() => setIsTitleEditable(true)} className="card-title" id='movie-title' data-toggle="tooltip" data-placement="right" title="Double-Click to edit">{movie.title}</h5>}
                    {isStoryEditable ? <div className="textAreaContainer"><textarea className='styleTextarea rounded' defaultValue={movie.storyline} onChange={handleStoryChange}></textarea><button className="tickButton" onClick={() => setIsStoryEditable(false)}>✓</button></div> : <p className="card-text" id='movie-story' data-toggle="tooltip" data-placement="right" title="Double-Click to edit" onDoubleClick={() => setIsStoryEditable(true)}>{movie.storyline}</p>}
                    <button className="btn btn-primary" onClick={handleSave}>Save</button>
                </div>
            </div>}
        </div>
    )
}

export default MovieDetails