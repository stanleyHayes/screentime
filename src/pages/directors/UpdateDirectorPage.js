import Layout from "../../components/layout/layout";
import {useFormik} from "formik";
import * as yup from "yup";
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
import {useNavigate, useParams} from "react-router";
import {selectDirector} from "../../redux/features/directors/directors-slice";
import {DIRECTORS_API} from "../../api/directors";
import {useEffect} from "react";

const UpdateDirectorPage = () => {
    const {loading, error, director} = useSelector(selectDirector);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(() => {
        dispatch(DIRECTORS_API.getDirector({id}))
    }, []);

    const formik = useFormik({
        initialValues: {
            first_name: director?.first_name,
            last_name: director?.last_name,
        },
        onSubmit: (values, {resetForm}) => {
            dispatch(DIRECTORS_API.updateDirector({
                id,
                values,
                resetForm,
                navigate
            }));
        },
        validationSchema: yup.object().shape({
            first_name: yup.string().required('Director first name required'),
            last_name: yup.string().required('Director last name required'),
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
                                    Update Director
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
                                                label="First name"
                                                placeholder="Enter first name"
                                                required={true}
                                                name="first_name"
                                                type="text"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.first_name}
                                                variant="outlined"
                                                error={Boolean(formik.touched.first_name && formik.errors.first_name)}
                                                helperText={formik.touched.first_name && formik.errors.first_name}
                                            />

                                            <TextField
                                                fullWidth={true}
                                                label="Last name"
                                                placeholder="Enter last name"
                                                required={true}
                                                name="last_name"
                                                type="text"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.last_name}
                                                variant="outlined"
                                                error={Boolean(formik.touched.last_name && formik.errors.last_name)}
                                                helperText={formik.touched.last_name && formik.errors.last_name}
                                            />
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

export default UpdateDirectorPage;
