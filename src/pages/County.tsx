import { Card, CardContent, CardMedia, Container, Typography } from '@mui/material';
import { useParams } from "react-router-dom";

const example_obj = {

    id: 12312,
    name: "Event",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, pariatur atque fugit quos sequi molestias fugiat optio aliquam nemo quasi dolorum cupiditate dolores aspernatur eum accusamus alias delectus quibusdam reprehenderit?",
    space: [19.132, 39.124],
    timescope: "today",
    photo: "../../placeholder.png"
}


function Event({ event }) {
    const { id, name, description, timescope, photo } = event;

    return (
        <Card sx={{ marginBottom: '1rem' }}>
            <CardMedia
                component="img"
                height="300"
                image={photo}
                alt={name}
                sx={{ objectFit: 'cover' }}
            />
            <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h5" component="div" sx={{ mb: 2, display: 'flex', justifyContent: 'space-between' }}>
                    <span className="fs-2">{name}</span>
                    <span className="fs-2">{timescope}</span>
                </Typography>
                <Typography variant="body1">{description}</Typography>
            </CardContent>
        </Card>
    );
}


export default function County() {
    const { county } = useParams();
    return (
        <Container>
            <div
                className="p-5 mt-4 text-center bg-image mb-4 rounded"
                style={{
                    backgroundImage:
                        'url(https://www.balealsurfcamp.com/content-files/uploads/2019/11/Baleal-beach-aereal-view-peniche-portugal.jpg)',
                    height: 400,
                }}
            >
                <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="text-white">
                            <Typography variant="h1" component="h1" gutterBottom>
                                {county}
                            </Typography>
                            <Typography variant="h4" component="h4" gutterBottom>
                                Zona Oeste
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>

            <Event event={example_obj} />
            <Event event={example_obj} />
            <Event event={example_obj} />
        </Container>
    );
}
