import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

export default function Header() {
  return (
    <Container fluid style={{display:'-ms-grid', justifyItems:'center', backgroundColor:'blue', fontSize:'30px'}}>
        <Row>
            <Col>Header</Col>
        </Row>
    </Container>
  )
}
