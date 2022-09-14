import {Box, Button} from "@mui/material";
import {Link, useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";
import {UI_ACTION_CREATORS} from "../../redux/features/ui/ui-slice";

const SidebarLink = ({label, path, icon}) => {

    const {pathname} = useLocation();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(UI_ACTION_CREATORS.closeDrawer());
    }

    return (
        <Box>
            <Link onClick={handleClick} to={path} style={{textDecoration: 'none'}}>
                <Button
                    startIcon={icon}
                    variant="text"
                    size="large"
                    sx={{
                        color: pathname === path ? 'secondary.main' : 'text.primary',
                        '&:hover': {
                            color: 'secondary.main',
                            transition: 'all 300ms ease-out'
                        }}}>
                    {label}
                </Button>
            </Link>
        </Box>
    )
}

export default SidebarLink;
