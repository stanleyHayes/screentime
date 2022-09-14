import './App.css';
import {Route, Routes} from "react-router";
import LandingPage from "./pages/index/LandingPage";
import MoviesPage from "./pages/movies/MoviesPage";
import MovieDetailPage from "./pages/movies/MovieDetailPage";
import CreateMoviePage from "./pages/movies/CreateMoviePage";
import DirectorsPage from "./pages/directors/DirectorsPage";
import DirectorDetailPage from "./pages/directors/DirectorDetailPage";
import CreateDirectorPage from "./pages/directors/CreateDirectorPage";
import UpdateMoviePage from "./pages/movies/UpdateMoviePage";
import UpdateDirectorPage from "./pages/directors/UpdateDirectorPage";

function App() {

    return (
        <Routes>
            <Route element={<LandingPage/>} path="/" exact={true}/>
            <Route element={<MoviesPage/>} path="/movies" exact={true}/>
            <Route element={<MovieDetailPage/>} path="/movies/:id" exact={true}/>
            <Route element={<CreateMoviePage/>} path="/movie/new" exact={true}/>
            <Route element={<UpdateMoviePage/>} path="/movies/:id/update" exact={true}/>
            <Route element={<DirectorsPage/>} path="/directors" exact={true}/>
            <Route element={<DirectorDetailPage/>} path="/directors/:id" exact={true}/>
            <Route element={<CreateDirectorPage/>} path="/director/new" exact={true}/>
            <Route element={<UpdateDirectorPage/>} path="/directors/:id/update" exact={true}/>
        </Routes>
    );
}

export default App;
