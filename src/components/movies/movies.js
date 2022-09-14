import {Box, Button, Grid} from "@mui/material";
import Empty from "../empty/empty";
import empty from "./../../assets/images/empty.png";
import {Link} from "react-router-dom";
import {VideoCallOutlined} from "@mui/icons-material";
import Movie from "../movie/movie";

const Movies = ({movies}) => {

    return (
        <Box>
            {movies.length === 0 ? (
                <Box sx={{minHeight: '30vh', display: 'flex', alignItems: 'center'}}>
                    <Empty
                        title="No movies available"
                        action={
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
                        }
                        icon={<img alt="" src={empty} style={{width: 250, height: 250}}/>}
                    />
                </Box>
            ) : (
                <Box>
                    <Grid container={true} spacing={2}>
                        {movies.map(movie => {
                            return (
                                <Grid key={movie._id} item={true} xs={12} md={4}>
                                    <Movie movie={movie}/>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Box>
            )}
        </Box>
    )
}

export default Movies;
