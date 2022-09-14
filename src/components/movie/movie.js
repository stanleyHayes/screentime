import {Avatar, Card, CardContent, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const Movie = ({movie}) => {

    return (
        <Card elevation={0} sx={{cursor: 'pointer'}}>
            <CardContent>
                <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
                    <Avatar variant="circular" sx={{backgroundColor: 'light.secondary'}}>
                        <Typography align="center" variant="h2" sx={{color: 'secondary.main', textTransform: 'uppercase'}}>
                            {movie.name[0]}
                        </Typography>
                    </Avatar>
                    <Link to={`/movies/${movie._id}`} style={{textDecoration: 'none'}}>
                        <Typography align="center" variant="body1" sx={{color: 'secondary.main', textTransform: 'uppercase'}}>
                            {movie.name}
                        </Typography>
                    </Link>
                    <Typography align="center" variant="body2" sx={{color: 'text.secondary'}}>
                        {movie.release_year}
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default Movie;
