import Layout from "../../components/layout/layout";
import {useFormik} from "formik";
import * as yup from "yup";
import {useEffect, useState} from "react";
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
    TextField,
    Typography
} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {selectMovie} from "../../redux/features/movies/movies-slice";
import {DatePicker} from "@mui/x-date-pickers";
import {MOVIES_API} from "../../api/movies";
import {useNavigate} from "react-router";
import {DIRECTORS_API} from "../../api/directors";
import {selectDirector} from "../../redux/features/directors/directors-slice";
import Director from "../../components/director/director";
import moment from "moment";

const CreateMoviePage = () => {
    const [releaseYear, setReleaseYear] = useState(new Date());
    const {loading, error} = useSelector(selectMovie);
    const {directors} = useSelector(selectDirector);
    const [director, setDirector] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            name: ''
        },
        onSubmit: (values, {resetForm}) => {
            if (!director) {
                return;
            }

            dispatch(MOVIES_API.createMovie({
                values: {...values, director: director._id, release_year: moment(releaseYear).year()},
                resetForm,
                navigate
            }));
        },
        validationSchema: yup.object().shape({
            name: yup.string().required('Movie name required'),
        }),
        validateOnChange: true,
        validateOnBlur: true
    });

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
            <Box sx={{py: 8, minHeight: '100vh'}}>
                <Container>
                    <form onSubmit={formik.handleSubmit}>
                        <Grid
                            container={true}
                            spacing={4}
                            alignItems="center"
                            justifyContent="space-between">
                            <Grid item={true} xs={12} md="auto">
                                <Typography variant="h4" sx={{color: 'secondary.main', textTransform: 'uppercase'}}>
                                    New Movie
                                </Typography>
                            </Grid>
                            <Grid item={true} xs={12} md="auto">
                                <Button
                                    type="submit"
                                    fullWidth={true}
                                    variant="contained"
                                    color="secondary"
                                    sx={{textTransform: 'capitalize'}}>
                                    Submit
                                </Button>
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
                                <Card elevation={0} sx={{height: '100%'}}>
                                    <CardContent sx={{height: '100%'}}>
                                        <Stack direction="column" spacing={3}>
                                            <TextField
                                                fullWidth={true}
                                                label="Name"
                                                placeholder="Enter movie name"
                                                required={true}
                                                name="name"
                                                type="text"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.name}
                                                variant="outlined"
                                                error={Boolean(formik.touched.name && formik.errors.name)}
                                                helperText={formik.touched.name && formik.errors.name}
                                            />

                                            <DatePicker
                                                label="Release year"
                                                showToolbar={true}
                                                closeOnSelect={true}
                                                views={['year']}
                                                onChange={(date) => setReleaseYear(date)}
                                                value={releaseYear}
                                                renderInput={params => {
                                                    return (
                                                        <TextField
                                                            variant="outlined"
                                                            label="Release year"
                                                            fullWidth={true}
                                                            {...params}
                                                        />
                                                    )
                                                }}
                                            />
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item={true} xs={12} md={6}>
                                <Card elevation={0} sx={{
                                    height: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <CardContent>
                                        <Stack direction="column" spacing={3}>
                                            <Box>
                                                {!director ? (
                                                    <Box>
                                                        <Typography
                                                            variant="h6"
                                                            align="center"
                                                            sx={{color: 'text.primary', mb: 2}}>
                                                            No director selected
                                                        </Typography>
                                                    </Box>
                                                ) : (
                                                    <Box>
                                                        {director && (
                                                            <Box>
                                                                <Typography
                                                                    variant="h6"
                                                                    align="center"
                                                                    sx={{color: 'text.primary', mb: 2}}>
                                                                    {`${director.first_name} ${director.last_name}`}
                                                                </Typography>
                                                                <Button
                                                                    onClick={() => setDirector(null)} variant="text"
                                                                    fullWidth={true} color="secondary">
                                                                    Remove Director
                                                                </Button>
                                                            </Box>
                                                        )}
                                                    </Box>
                                                )}
                                            </Box>
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </form>

                    <Divider variant="fullWidth" sx={{my: 3}} light={true}/>

                    <Grid container={true} spacing={4} alignItems="center" justifyContent="space-between">
                        <Grid item={true} xs={12} md={6}>
                            <Typography
                                align="center"
                                variant="h6"
                                gutterBottom={true}
                                sx={{color: 'secondary.main', textTransform: 'uppercase'}}>
                                Directors to choose from
                            </Typography>
                            <Typography
                                align="center"
                                variant="body2"
                                sx={{color: 'text.primary', textTransform: 'uppercase'}}>
                                Click to select director
                            </Typography>
                        </Grid>
                        <Grid item={true} xs={12} md={6}>
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
                    </Grid>

                    <Divider variant="fullWidth" sx={{my: 3}} light={true}/>

                    <Grid container={true} spacing={4}>
                        {directors && filteredDirectors.map(director => {
                            return (
                                <Grid
                                    onClick={() => setDirector(director)}
                                    key={director._id}
                                    item={true}
                                    xs={12}
                                    md={4}>
                                    <Director director={director}/>
                                </Grid>
                            )
                        })}
                    </Grid>

                </Container>
            </Box>
        </Layout>
    )
}

export default CreateMoviePage;
