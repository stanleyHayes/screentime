import {Box, Button, Container, Grid, Typography} from "@mui/material";
import React from "react";
import {Link} from "react-router-dom";
import background from "./../../assets/images/banner.jpg";

const LandingPage = () => {

    return (
        <Box
            sx={{
            maxHeight: '100vh', height: '100vh', overflowY: 'hidden',
            backgroundImage: `url(${background})`,
            backgroundAttachment: 'fixed',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundBlendMode: 'lighten',
            backgroundSize: 'cover'
        }}>
            <Box
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingY: 4
                }}>
                <Container maxWidth="sm">
                    <Typography
                        align="center"
                        variant="h2"
                        sx={{color: 'secondary.main', mb: 2, fontWeight: 700}}>
                        Screen Time
                    </Typography>
                    <Typography
                        align="center"
                        variant="h6"
                        sx={{color: 'text.primary', mb: 4}}>
                        Waste your life watching rubbish
                    </Typography>
                    <Grid container={true} spacing={2} justifyContent="center">
                        <Grid item={true} xs={12} md="auto">
                            <Link to={`/movies`} style={{textDecoration: 'none'}}>
                                <Button
                                    fullWidth={true}
                                    variant="contained"
                                    size="large"
                                    disableElevation={true}
                                    color="secondary"
                                    sx={{textTransform: 'capitalize'}}>
                                    Get Started
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    )
}

export default LandingPage;
