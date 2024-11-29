import React from 'react'
import {Container, Row, Col, Carousel, Image} from 'react-bootstrap'


export default function Bagde() {
  return (
    <Container fluid style={{display:'auto' ,backgroundColor: 'blue', fontSize:'32px', height: '300px', justifyContent:'center', alignContent:'center'}}>
        <Row>
            <Carousel>
                <Carousel.Item>
                <Image text="First slide"/>
                    <Carousel.Caption>
                        <h3>First slide text</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/800x400"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                <Image text="Third slide"/>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            
        </Row>
    </Container>
  )
}
