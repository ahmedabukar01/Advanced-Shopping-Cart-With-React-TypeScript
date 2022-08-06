import { Col, Row } from 'react-bootstrap'
import storeItems from '../data/items.json'
import StoreItems from '../components/StoreItems'

const Store = () => {
  return (
    <Row>
      {storeItems.map(item=>(
        <Col>
        <StoreItems {...item}/>
        </Col>
      ))}
    </Row>
  )
}

export default Store