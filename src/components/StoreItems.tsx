import { Card } from "react-bootstrap";

interface itemProps {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}
 export default function({id, name, price, imgUrl}: itemProps){
    return <Card>
        <Card.Img variant="top" height="200px" src={imgUrl} style={{objectFit: "cover"}}/>
    </Card>
}