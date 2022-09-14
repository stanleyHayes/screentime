import './App.css';
import {Route, Routes} from "react-router";
import LandingPage from "./pages/index/LandingPage";
import MoviesPage from "./pages/movies/MoviesPage";
import MovieDetailPage from "./pages/movies/MovieDetailPage";
import CreateMoviePage from "./pages/movies/CreateMoviePage";
import DirectorsPage from "./pages/directors/DirectorsPage";
import DirectorDetailPage from "./pages/directors/DirectorDetailPage";
import CreateDirectorPage from "./pages/directors/CreateDirectorPage";

function App() {
    
    return (
        <Routes>
            <Route element={<LandingPage/>} path="/" exact={true}/>
            <Route element={<MoviesPage/>} path="/movies" exact={true}/>
            <Route element={<MovieDetailPage/>} path="/movies/:id" exact={true}/>
            <Route element={<CreateMoviePage/>} path="/movie/new" exact={true}/>
            <Route element={<DirectorsPage/>} path="/directors" exact={true}/>
            <Route element={<DirectorDetailPage/>} path="/directors/:id" exact={true}/>
            <Route element={<CreateDirectorPage/>} path="/director/new" exact={true}/>
        </Routes>
    );
}

export default App;
