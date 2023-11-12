import React from 'react'

import { Row, Col } from 'react-bootstrap'
import { Slide } from "react-awesome-reveal";

import '../../BiographySection/BiographySection.css'

import biography1_photo from '../../../../media/biography/biography2_photo.webp'

const Biography2 = () => {
  return (
    <div className='py-5'>
                <Row>
                    <Col className='d-none d-md-block'>
                    <Slide>
                            <div>
                                <img src={biography1_photo} alt="accessories" className='img_biographySection' />
                            </div>
                        </Slide>
                    </Col>
                    <Col md={6} className='d-flex align-items-center text-center mb-5 mb-md-0'>
                        <div className='txt_biographySection'>
                        The strength of TWO_cycling lies in the diversity of our members: cyclists of all ages, levels of experience, and cultural backgrounds, all gathered in one welcoming platform. Here, you can share your road adventures, tips on stunning routes, and the thrill of your rides. Our biography is a tale of growth, friendship, and mutual support as we tackle new challenges together and seek an active and healthy lifestyle through our common love for cycling.
                        </div>
                    </Col>
                    <Col className='d-md-none'>
                    <Slide>
                            <div>
                                <img src={biography1_photo} alt="accessories" className='img_biographySection' />
                            </div>
                        </Slide>
                    </Col>
                </Row>
        </div>
  )
}

export default Biography2