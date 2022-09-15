import {Box, SwipeableDrawer} from "@mui/material";
import Header from "../header/header";
import Drawer from "../drawer/drawer";
import {selectUI, UI_ACTION_CREATORS} from "../../redux/features/ui/ui-slice";
import {useDispatch, useSelector} from "react-redux";

const Layout = ({children}) => {

    const {drawerOpen} = useSelector(selectUI);
    const dispatch = useDispatch();

    return (
        <Box sx={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
            <Box sx={{mb: {xs: 7, lg: 8}}}>
                <Header/>
            </Box>
            <Box sx={{flex: 1}}>
                {children}
            </Box>

            <SwipeableDrawer
                open={drawerOpen}
                onOpen={() => dispatch(UI_ACTION_CREATORS.openDrawer())}
                onClose={() => dispatch(UI_ACTION_CREATORS.closeDrawer())}>
                <Drawer/>
            </SwipeableDrawer>
        </Box>
    )
}

export default Layout;
