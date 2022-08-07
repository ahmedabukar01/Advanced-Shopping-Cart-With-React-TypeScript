import { Card } from "react-bootstrap";
import formatCurrency from "../utilities/formatCurrency";

interface itemProps {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}
 export default function({id, name, price, imgUrl}: itemProps){
    return <Card>
        <Card.Img variant="top" height="200px" src={imgUrl} style={{objectFit: "cover"}}/>
        <Card.Body className="d=flex flex-column">
            <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                <span className="fs-2">{name}</span>
                <span className="ms-2 text-muted">{formatCurrency(price)}</span>
            </Card.Title>
        </Card.Body>
    </Card>
} 