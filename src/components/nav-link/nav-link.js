import {Box, Button} from "@mui/material";
import {Link, useLocation} from "react-router-dom";

const NavLink = ({label, path}) => {

    const {pathname} = useLocation();

    return (
        <Box>
            <Link to={path} style={{textDecoration: 'none'}}>
                <Button
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

export default NavLink;
