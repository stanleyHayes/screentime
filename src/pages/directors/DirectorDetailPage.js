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
import {selectDirector} from "../../redux/features/directors/directors-slice";
import {DIRECTORS_API} from "../../api/directors";
import {useParams} from "react-router";
import {Link} from "react-router-dom";

const DirectorDetailPage = () => {
    const {loading, error, director} = useSelector(selectDirector);
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {
        dispatch(DIRECTORS_API.getDirector({id}))
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
                                Director Detail
                            </Typography>
                        </Grid>
                        <Grid item={true} xs={12} md="auto">
                            <Link to={`/directors/${director?._id}/update`} style={{textDecoration: 'none'}}>
                                <Button
                                    type="submit"
                                    fullWidth={true}
                                    variant="contained"
                                    color="secondary"
                                    sx={{textTransform: 'capitalize'}}>
                                    Update Director
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

                            <Card elevation={0} sx={{height: '100%'}}>
                                <CardContent sx={{height: '100%'}}>
                                    <Stack direction="column" spacing={2}>
                                        <Box>
                                            <Typography
                                                align="center"
                                                variant="body2"
                                                sx={{color: 'text.secondary', textTransform: 'uppercase'}}>
                                                First Name
                                            </Typography>
                                            <Typography align="center" variant="h6" sx={{color: 'text.primary'}}>
                                                {director?.first_name}
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography
                                                align="center"
                                                variant="body2"
                                                sx={{color: 'text.secondary', textTransform: 'uppercase'}}>
                                                Last Name
                                            </Typography>
                                            <Typography align="center" variant="h6" sx={{color: 'text.primary'}}>
                                                {director?.last_name}
                                            </Typography>
                                        </Box>
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

export default DirectorDetailPage;
