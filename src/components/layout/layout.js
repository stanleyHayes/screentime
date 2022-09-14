import {Box} from "@mui/material";
import Header from "../header/header";

const Layout = ({children}) => {

    return (
        <Box sx={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
            <Box>
                <Header/>
            </Box>
            <Box sx={{flex: 1}}>
                {children}
            </Box>
        </Box>
    )
}

export default Layout;
