import {Card, CardContent, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const Movie = ({movie}) => {

    return (
        <Card elevation={0} sx={{cursor: 'pointer'}}>
            <CardContent>
                <Stack direction="row" spacing={2}>
                    <Link to={`/movies/${movie._id}`} style={{textDecoration: 'none'}}>
                        <Typography variant="body1" sx={{color: 'secondary.main', textTransform: 'uppercase'}}>
                            {movie.name}
                        </Typography>
                    </Link>
                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                        {movie.release_year}
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default Movie;
