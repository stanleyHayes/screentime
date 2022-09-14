import Layout from "../../components/layout/layout";
import {useDispatch, useSelector} from "react-redux";
import {selectMovie} from "../../redux/features/movies/movies-slice";
import {Alert, AlertTitle, Box, Button, Container, Divider, Grid, LinearProgress, Typography} from "@mui/material";
import {VideoCallOutlined} from "@mui/icons-material";
import {Link} from "react-router-dom";
import Movies from "../../components/movies/movies";
import {useEffect} from "react";
import {MOVIES_API} from "../../api/movies";

const MoviesPage = () => {
    const {movies, loading, error} = useSelector(selectMovie);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(MOVIES_API.getMovies());
    }, []);

    return (
        <Layout>
            {loading && <LinearProgress variant="query" color="secondary"/>}
            <Box sx={{py: 8}}>
                <Container>
                    <Grid container={true} spacing={4} alignItems="center" justifyContent="space-between">
                        <Grid item={true} xs={12} md="auto">
                            <Typography variant="h4" sx={{color: 'secondary.main', textTransform: 'uppercase'}}>
                                Movies
                            </Typography>
                        </Grid>
                        <Grid item={true} xs={12} md="auto">
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
                    {movies && <Movies movies={movies} />}
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
