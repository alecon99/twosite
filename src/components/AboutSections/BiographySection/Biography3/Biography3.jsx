import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import { Slide } from "react-awesome-reveal";

import '../../BiographySection/BiographySection.css'

import biography1_photo from '../../../../media/biography/biography3_photo.webp'

const Biography3 = () => {
  return (
    <div className='py-5'>
            <Container>
                <Row>
                    <Col md={6} className='d-flex align-items-center text-center mb-5 mb-md-0'>
                        <div className='txt_biographySection'>
                            Hey cycling buddies, welcome to the TWO_cycling family! Here, our shared passion for cycling is the glue that holds this unique community together. We were born from the enthusiasm of a group of two-wheel lovers who saw the bicycle not only as a means to stay fit but as a passport to explore the world and connect with other cyclists fueled by the same passion. Our story is an exciting mix of road expeditions, breathtaking mountain bike excursions, and lots of laughs with cyclists from every corner of the globe, united by the magic of cycling.
                        </div>
                    </Col>
                    <Col md={6}>
                        <Slide direction='right'>
                            <div>
                                <img src={biography1_photo} alt="accessories" className='img_biographySection' />
                            </div>
                        </Slide>
                    </Col>
                </Row>
            </Container>
        </div>
  )
}

export default Biography3