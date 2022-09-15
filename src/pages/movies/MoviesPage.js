import Layout from "../../components/layout/layout";
import {useDispatch, useSelector} from "react-redux";
import {selectMovie} from "../../redux/features/movies/movies-slice";
import {
    Alert,
    AlertTitle,
    Box,
    Button,
    Container,
    Divider,
    Grid,
    LinearProgress,
    TextField,
    Typography
} from "@mui/material";
import {VideoCallOutlined} from "@mui/icons-material";
import {Link} from "react-router-dom";
import Movies from "../../components/movies/movies";
import {useEffect, useState} from "react";
import {MOVIES_API} from "../../api/movies";

const MoviesPage = () => {
    const {movies, loading, error} = useSelector(selectMovie);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(MOVIES_API.getMovies());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [query, setQuery] = useState("");
    const [filteredMovies, setFilteredMovies] = useState(movies || []);

    const handleQueryChange = event => {
        setQuery(event.target.value);
        setFilteredMovies(movies.filter(movie => movie.name.toLowerCase().includes(query.toLowerCase())));
    }

    return (
        <Layout>
            {loading && <LinearProgress variant="query" color="secondary"/>}
            <Box sx={{py: 8}}>
                <Container>
                    <Grid container={true} spacing={4} alignItems="center" justifyContent="space-between">
                        <Grid item={true} xs={12} md={4}>
                            <Typography variant="h4" sx={{color: 'secondary.main', textTransform: 'uppercase'}}>
                                Movies
                            </Typography>
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            <TextField
                                fullWidth={true}
                                label="Search"
                                placeholder="Search movie by name"
                                required={true}
                                name="name"
                                type="text"
                                size="small"
                                onChange={handleQueryChange}
                                value={query}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            <Link to={'/movie/new'} style={{textDecoration: 'none'}}>
                                <Button
                                    fullWidth={true}
                                    variant="contained"
                                    color="secondary"
                                    startIcon={<VideoCallOutlined/>}
                                    sx={{
                                        textTransform: 'capitalize'
                                    }}>
                                    Add Movie
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                    <Divider variant="fullWidth" sx={{my: 3}} light={true}/>
                    {movies && <Movies movies={filteredMovies} />}
                    {error && (
                        <Alert variant="standard" severity="error">
                            <AlertTitle>{error}</AlertTitle>
                        </Alert>
                    )}
                </Container>
            </Box>
        </Layout>
    )
}

export default MoviesPage;
