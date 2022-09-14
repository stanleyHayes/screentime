import {Container, Stack, Typography} from "@mui/material";

const Empty = ({action, title, icon}) => {
    return (
        <Container>
            <Stack direction="column" spacing={3} justifyContent="center" alignItems="center">
                {icon}
                <Typography variant="h5" sx={{color: 'text.primary'}} align="center">
                    {title}
                </Typography>
                {action}
            </Stack>
        </Container>
    )
}

export default Empty;
