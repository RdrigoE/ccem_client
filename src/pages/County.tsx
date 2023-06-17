import { Card, Container } from "react-bootstrap";
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
    const { id, name, description, timescope, photo } = event
    return (
        <Card className="mb-4">
            <Card.Img
                variant="top"
                src={photo}
                height="300px"
                style={{ objectFit: "cover" }}
            />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-baseline mb-2">
                    <span className="fs-2">{name}</span>
                    <span className="fs-2">{timescope}</span>
                </Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>


            </Card.Body>
        </Card>

    )


}


export default function County() {
    const { county } = useParams();
    return (<Container>
        <div
            className='p-5 text-center bg-image mb-4 rounded '
            style={{ backgroundImage: "url(https://www.balealsurfcamp.com/content-files/uploads/2019/11/Baleal-beach-aereal-view-peniche-portugal.jpg)", height: 200 }}
        >
            <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                <div className='d-flex justify-content-center align-items-center h-100'>
                    <div className='text-white'>
                        <h1 className='mb-3'>{county}</h1>
                        <h4 className='mb-3'>Zona Oeste</h4>
                    </div>
                </div>
            </div>
        </div>



        <Event event={example_obj} />
        <Event event={example_obj} />
        <Event event={example_obj} />
    </Container>)
}
