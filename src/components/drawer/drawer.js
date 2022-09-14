import {Box, Button, Container, Divider, Stack} from "@mui/material";
import {
    Home,
    HomeOutlined,
    People,
    PeopleOutline,
    PersonAddOutlined,
    VideoCall,
    VideoCallOutlined
} from "@mui/icons-material";
import SidebarLink from "../sidebar-link/sidebar-link";
import {useLocation} from "react-router-dom";

const Drawer = () => {

    const {pathname} = useLocation();

    return (
        <Box sx={{pt: 2, width: {xs: '80vw', lg: '0vw'}}}>
            <Container>
                <Stack
                    direction="column"
                    spacing={2}
                    divider={<Divider variant="fullWidth" light={true}/>}>
                    <SidebarLink
                        icon={
                            pathname === '/' ?
                                <Home color="secondary"/> :
                                <HomeOutlined sx={{color: 'white'}}/>
                        }
                        label="Home" path="/"
                    />
                    <SidebarLink
                        icon={
                            pathname === '/movies' ?
                                <VideoCall color="secondary"/> :
                                <VideoCallOutlined sx={{color: 'white'}}/>
                        }
                        label="Movies"
                        path="/movies"
                    />
                    <SidebarLink
                        icon={
                            pathname === '/directors' ?
                                <People color="secondary"/> :
                                <PeopleOutline sx={{color: 'white'}}/>
                        }
                        label="Directors"
                        path="/directors"
                    />
                    <Button
                        variant="outlined"
                        color="secondary"
                        startIcon={<PersonAddOutlined/>}
                        sx={{
                            textTransform: 'capitalize',
                            borderWidth: 2
                        }}>
                        Add Director
                    </Button>
                    <Button
                        disableElevation={true}
                        variant="contained"
                        color="secondary"
                        startIcon={<VideoCallOutlined/>}
                        sx={{
                            textTransform: 'capitalize'
                        }}>
                        Add Movie
                    </Button>
                </Stack>
            </Container>
        </Box>
    )
}

export default Drawer;
