import {Box, Button, Grid} from "@mui/material";
import Empty from "../empty/empty";
import empty from "./../../assets/images/empty.png";
import {Link} from "react-router-dom";
import {VideoCallOutlined} from "@mui/icons-material";
import Director from "../director/director";

const Directors = ({directors}) => {

    return (
        <Box>
            {directors.length === 0 ? (
                <Box sx={{minHeight: '30vh', display: 'flex', alignItems: 'center'}}>
                    <Empty
                        title="No directors available"
                        action={
                            <Link to={'/director/new'} style={{textDecoration: 'none'}}>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    startIcon={<VideoCallOutlined/>}
                                    sx={{
                                        textTransform: 'capitalize'
                                    }}>
                                    Add Director
                                </Button>
                            </Link>
                        }
                        icon={<img alt="" src={empty} style={{width: 250, height: 250}}/>}
                    />
                </Box>
            ) : (
                <Box>
                    <Grid container={true} spacing={2}>
                        {directors.map(director => {
                            return (
                                <Grid key={director._id} item={true} xs={12} md={4}>
                                    <Director director={director}/>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Box>
            )}
        </Box>
    )
}

export default Directors;
