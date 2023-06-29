import {Card} from "react-bootstrap";
import {getCurrentDate} from "../utils";

export const Footer = () => {
    return <Card.Footer className="container position-relative bottom-0">
        <Card.Body>
            <Card.Title className="text-center">{getCurrentDate()}</Card.Title>
        </Card.Body>
    </Card.Footer>
}
