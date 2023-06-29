import {Card, Nav} from "react-bootstrap";
import {useNavigate} from "react-router";

export const Header = () => {
    const navigate = useNavigate();
    return <Card.Header className="mb-5">
            <Nav className="justify-content-between" variant="tabs" defaultActiveKey="tickets">
                <Nav.Item>
                    <Nav.Link onClick={() => navigate('tickets')}>Tickets</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => navigate('dictionary')}>Dictionary</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => navigate('map')}>Map</Nav.Link>
                </Nav.Item>
            </Nav>
        </Card.Header>
}
