import Layout from "../../components/layout/layout";
import {useDispatch, useSelector} from "react-redux";
import {selectDirector} from "../../redux/features/directors/directors-slice";
import {Alert, AlertTitle, Box, Button, Container, Divider, Grid, LinearProgress, Typography} from "@mui/material";
import {PeopleOutline} from "@mui/icons-material";
import {Link} from "react-router-dom";
import Directors from "../../components/directors/directors";
import {useEffect} from "react";
import {DIRECTORS_API} from "../../api/directors";

const MoviesPage = () => {
    const {directors, loading, error} = useSelector(selectDirector);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(DIRECTORS_API.getDirectors());
    }, []);

    return (
        <Layout>
            {loading && <LinearProgress variant="query" color="secondary"/>}
            <Box sx={{py: 8}}>
                <Container>
                    <Grid container={true} spacing={4} alignItems="center" justifyContent="space-between">
                        <Grid item={true} xs={12} md="auto">
                            <Typography variant="h4" sx={{color: 'secondary.main', textTransform: 'uppercase'}}>
                                Directors
                            </Typography>
                        </Grid>
                        <Grid item={true} xs={12} md="auto">
                            <Link to={'/director/new'} style={{textDecoration: 'none'}}>
                                <Button
                                    fullWidth={true}
                                    variant="contained"
                                    color="secondary"
                                    startIcon={<PeopleOutline/>}
                                    sx={{
                                        textTransform: 'capitalize'
                                    }}>
                                    Add Director
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                    <Divider variant="fullWidth" sx={{my: 3}} light={true}/>
                    {directors && <Directors directors={directors}/>}
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
