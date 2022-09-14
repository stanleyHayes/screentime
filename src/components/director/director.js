import {Avatar, Card, CardContent, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const Movie = ({director}) => {

    return (
        <Card elevation={0} sx={{cursor: 'pointer'}}>
            <CardContent>
                <Stack direction="column" spacing={2} justifyContent="center" alignItems="center">
                    <Avatar variant="circular" sx={{backgroundColor: 'light.secondary'}}>
                        <Typography
                            align="center"
                            variant="h6"
                            sx={{color: 'secondary.main', textTransform: 'uppercase'}}>
                            {`${director.first_name[0]}${director.last_name[0]}`}
                        </Typography>
                    </Avatar>
                    <Link to={`/directors/${director._id}`} style={{textDecoration: 'none'}}>
                        <Typography
                            align="center"
                            variant="body1"
                            sx={{color: 'secondary.main', textTransform: 'uppercase'}}>
                            {`${director.first_name} ${director.last_name}`}
                        </Typography>
                    </Link>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default Movie;
