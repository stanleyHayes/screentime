import Layout from "../../components/layout/layout";
import {useEffect} from "react";
import {
    Alert,
    AlertTitle,
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Divider,
    Grid,
    LinearProgress,
    Stack,
    Typography
} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {selectMovie} from "../../redux/features/movies/movies-slice";
import {MOVIES_API} from "../../api/movies";
import {useParams} from "react-router";
import {Link} from "react-router-dom";

const MovieDetailPage = () => {
    const {loading, error, movie} = useSelector(selectMovie);
    const dispatch = useDispatch();
    const {id} = useParams();
    useEffect(() => {
        dispatch(MOVIES_API.getMovie({id}));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    return (
        <Layout>
            {loading && <LinearProgress variant="query" color="secondary"/>}
            <Box sx={{py: 8, minHeight: '100vh'}}>
                <Container>
                    <Grid
                        container={true}
                        spacing={4}
                        alignItems="center"
                        justifyContent="space-between">
                        <Grid item={true} xs={12} md="auto">
                            <Typography variant="h4" sx={{color: 'secondary.main', textTransform: 'uppercase'}}>
                                Movie Detail
                            </Typography>
                        </Grid>
                        <Grid item={true} xs={12} md="auto">
                            <Link to={`/movies/${movie?._id}/update`} style={{textDecoration: 'none'}}>
                                <Button
                                    type="submit"
                                    fullWidth={true}
                                    variant="contained"
                                    color="secondary"
                                    sx={{textTransform: 'capitalize'}}>
                                    Update Movie
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>

                    <Divider variant="fullWidth" sx={{my: 3}} light={true}/>

                    {error && (
                        <Box>
                            <Alert variant="standard" severity="error">
                                <AlertTitle>{error}</AlertTitle>
                            </Alert>
                            <Divider variant="fullWidth" sx={{my: 3}} light={true}/>
                        </Box>
                    )}

                    <Grid container={true} spacing={4}>
                        <Grid item={true} xs={12} md={6}>

                            <Card
                                elevation={0}
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                <CardContent>
                                    <Stack spacing={2} justifyContent="center" alignItems="center">
                                        <Typography
                                            align="center"
                                            variant="h4"
                                            sx={{color: 'secondary.main', textTransform: 'uppercase'}}>
                                            {movie?.name}
                                        </Typography>
                                        <Typography align="center" variant="body2" sx={{color: 'text.secondary'}}>
                                            {movie?.release_year}
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid
                            item={true}
                            xs={12}
                            md={6}>
                            <Card elevation={0} sx={{
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <CardContent>
                                    <Stack direction="column" spacing={3}>
                                        <Typography
                                            variant="h6"
                                            align="center"
                                            sx={{color: 'text.secondary'}}>
                                            Director
                                        </Typography>
                                        <Typography
                                            variant="h4"
                                            align="center"
                                            sx={{color: 'text.primary', mb: 2}}>
                                            {`${movie?.director?.first_name} ${movie?.director?.last_name}`}
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Layout>
    )
}

export default MovieDetailPage;
