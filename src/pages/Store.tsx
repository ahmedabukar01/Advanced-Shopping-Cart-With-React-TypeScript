import { Col, Row } from 'react-bootstrap'
import storeItems from '../data/items.json'
import StoreItems from '../components/StoreItems'

const Store = () => {
  return (
    <Row md={2} xs={1} lg={3} g={3}>
      {storeItems.map(item=>(
        <Col>
        <StoreItems {...item}/>
        </Col>
      ))}
    </Row>
  )
}

export default Store