import { Button, Card } from "react-bootstrap";
import formatCurrency from "../utilities/formatCurrency";

interface itemProps {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}
 export default function({id, name, price, imgUrl}: itemProps){
    let quantity = 0;
    return <Card className="h-100">
        <Card.Img variant="top" height="200px" src={imgUrl} style={{objectFit: "cover"}}/>
        <Card.Body className="d=flex flex-column">
            <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                <span className="fs-2">{name}</span>
                <span className="ms-2 text-muted">{formatCurrency(price)}</span>
            </Card.Title>
            <div className="mt-auto">
            {quantity === 0 ? (
                <Button className="w-100">Add To Cart</Button>                                         
                ) : (<div className="d-flex align-items-center flex-column" style={{gap: '.5rem'}}>
                    <div className="d-flex align-items-center justify-content-center" style={{gap: '.5rem'}}></div>
                </div>)}
            </div> 
        </Card.Body>
    </Card>
}  