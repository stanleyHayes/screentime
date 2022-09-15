import Layout from "../../components/layout/layout";
import {useDispatch, useSelector} from "react-redux";
import {selectDirector} from "../../redux/features/directors/directors-slice";
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
import {PeopleOutline} from "@mui/icons-material";
import {Link} from "react-router-dom";
import Directors from "../../components/directors/directors";
import {useEffect, useState} from "react";
import {DIRECTORS_API} from "../../api/directors";

const MoviesPage = () => {
    const {directors, loading, error} = useSelector(selectDirector);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(DIRECTORS_API.getDirectors());
    }, []);

    const [query, setQuery] = useState("");
    const [filteredDirectors, setFilteredDirectors] = useState(directors || [])
    const handleQueryChange = event => {
        setQuery(event.target.value);
        setFilteredDirectors(directors.filter(director =>
            director.first_name.toLowerCase().includes(query.toLowerCase())
            ||
            director.last_name.toLowerCase().includes(query.toLowerCase())));
    }

    return (
        <Layout>
            {loading && <LinearProgress variant="query" color="secondary"/>}
            <Box sx={{py: 8}}>
                <Container>
                    <Grid container={true} spacing={4} alignItems="center" justifyContent="space-between">
                        <Grid item={true} xs={12} md={4}>
                            <Typography variant="h4" sx={{color: 'secondary.main', textTransform: 'uppercase'}}>
                                Directors
                            </Typography>
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            <TextField
                                fullWidth={true}
                                label="Search"
                                placeholder="Search director by name"
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
                    {directors && <Directors directors={filteredDirectors}/>}
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
