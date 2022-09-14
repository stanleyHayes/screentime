import Layout from "../../components/layout/layout";
import {useFormik} from "formik";
import * as yup from "yup";
import {useState} from "react";
import {
    Alert, AlertTitle,
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

const CreateMoviePage = () => {
    const [releaseYear, setReleaseYear] = useState(new Date());
    const {loading, error} = useSelector(selectMovie);
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
                values: {...values, director: director._id, release_year: releaseYear},
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
                                                        <Typography variant="h6" align="center"
                                                                    sx={{color: 'text.primary', mb: 2}}>
                                                            No director selected
                                                        </Typography>
                                                        <Button variant="text" fullWidth={true} color="secondary">
                                                            Select Director
                                                        </Button>
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
                </Container>
            </Box>
        </Layout>
    )
}

export default CreateMoviePage;
