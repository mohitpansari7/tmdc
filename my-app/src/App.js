import './App.css';
import Header from './Components/Header/Header';
import Content from './Components/Content/Content';
import { Routes, Route, Navigate} from 'react-router-dom';
import Movies from './Components/Movies/Movies';
import Genre from './Components/Genre/Genre';
import NoMatch from './Components/NoMatch/NoMatch';
import MovieDetails from './Components/MovieDetails/MovieDetails';
import MovieByGenre from './Components/MovieByGenre/MovieByGenre';

function App() {
  return (
    <div className='App'>
    <Header/>
    <Routes>
      <Route path='/' element={<Navigate to='/home' />}></Route>
      <Route path='/home' element={<Content />}></Route>
      <Route path='/movies' element={<Movies />}></Route>
      <Route path='/genre' element={<Genre />}></Route>
      <Route path='/movieDetails/:movieName' element={<MovieDetails />}></Route>
      <Route path='/movieByGenre/:genre' element={<MovieByGenre />}></Route>
      <Route path='*' element={<NoMatch />}></Route>
    </Routes>
    </div>
  );
}

export default App;
