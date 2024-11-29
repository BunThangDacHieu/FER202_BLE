import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

export default function Footer() {
  return (
    <Container fluid style={{ backgroundColor:'blue', fontSize:'30px'}}>
        <Row>
            <Col md={8} style={{justifyItems:'center', justifyContent:'center', backgroundColor:'yellow'}}>Footer</Col>
            <Col md={1}>1</Col>
            <Col md={1}>2</Col>
            <Col md={1}>3</Col>
            <Col md={1}>4</Col>
        </Row>
        
    </Container>
  )
}
