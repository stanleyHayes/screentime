import {Button, Stack, Toolbar} from "@mui/material";
import {Link} from "react-router-dom";
import logo from "./../../assets/images/logo.png";
import NavLink from "../nav-link/nav-link";
import {PersonAddOutlined, VideoCallOutlined} from "@mui/icons-material";

const DesktopHeader = () => {
    return (
        <Toolbar variant="regular">
            <Stack sx={{width: '100%'}} direction="row" justifyContent="space-between" alignItems="center">
                <Link to={'/'} style={{textDecoration: 'none'}}>
                    <img alt="" src={logo} style={{width: 50, height: 50}}/>
                </Link>

                <Stack direction="row" spacing={2} alignItems="center">
                    <NavLink label="Home" path="/"/>
                    <NavLink label="Movies" path="/movies"/>
                    <NavLink label="Directors" path="/directors"/>
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                    <Link to={'/director/new'} style={{textDecoration: 'none'}}>
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
                    </Link>

                    <Link to={'/movie/new'} style={{textDecoration: 'none'}}>
                        <Button
                            variant="contained"
                            color="secondary"
                            startIcon={<VideoCallOutlined/>}
                            sx={{
                                textTransform: 'capitalize'
                            }}>
                            Add Movie
                        </Button>
                    </Link>
                </Stack>
            </Stack>
        </Toolbar>
    )
}

export default DesktopHeader;
