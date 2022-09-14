import {Stack, Toolbar, Tooltip, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {Menu, PersonAddOutlined, VideoCallOutlined} from "@mui/icons-material";
import {UI_ACTION_CREATORS} from "../../redux/features/ui/ui-slice";
import {useDispatch} from "react-redux";

const MobileHeader = () => {

    const dispatch = useDispatch();

    return (
        <Toolbar variant="regular">
            <Stack
                sx={{width: '100%'}}
                direction="row"
                justifyContent="space-between"
                alignItems="center" spacing={2}>
                <Stack spacing={2} direction="row" alignItems="center">
                    <Menu
                        onClick={() => dispatch(UI_ACTION_CREATORS.openDrawer())}
                        color="secondary"
                        sx={{
                            backgroundColor: 'light.secondary',
                            fontSize: 28,
                            borderTopLeftRadius: 0,
                            borderBottomLeftRadius: 8,
                            borderBottomRightRadius: 8,
                            borderTopRightRadius: 8,
                            padding: 0.5
                        }}/>

                    <Link to={'/'} style={{textDecoration: 'none'}}>
                        <Typography variant="h6" sx={{color: 'secondary.main', textTransform: 'uppercase'}}>
                            Screen Time
                        </Typography>
                    </Link>
                </Stack>
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}>
                    <Tooltip title={'Create a new director'}>
                        <Link to={'/director/new'} style={{textDecoration: 'none'}}>
                            <PersonAddOutlined
                                sx={{
                                    backgroundColor: 'light.secondary',
                                    fontSize: 28,
                                    borderTopLeftRadius: 0,
                                    borderBottomLeftRadius: 8,
                                    borderBottomRightRadius: 8,
                                    borderTopRightRadius: 8,
                                    padding: 0.5
                                }} color="secondary"/>
                        </Link>
                    </Tooltip>
                    <Tooltip title={'Create a new movie'}>
                        <Link to={'/movie/new'} style={{textDecoration: 'none'}}>
                            <VideoCallOutlined
                                sx={{
                                    backgroundColor: 'light.secondary',
                                    fontSize: 28,
                                    borderTopLeftRadius: 0,
                                    borderBottomLeftRadius: 8,
                                    borderBottomRightRadius: 8,
                                    borderTopRightRadius: 8,
                                    padding: 0.5
                                }}
                                color="secondary"
                            />
                        </Link>
                    </Tooltip>
                </Stack>
            </Stack>
        </Toolbar>
    )
}

export default MobileHeader;
