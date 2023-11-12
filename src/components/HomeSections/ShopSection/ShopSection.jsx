import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import { Slide } from "react-awesome-reveal";

import '../ShopSection/ShopSection.css'

import clothes from '../../../media/clothes.jpeg'
import accessories from '../../../media/accessories.png'

const ShopSection = () => {
    return (
        <div className='mb-5'>
            <Container>
                <Row>
                    <Col md={6} className='shop_card'>
                        <Slide>
                            <div className='bg-dark'>
                                <img src={clothes} alt="clothes" className='img_shopSection' />
                                <div id='txt_clothes_shopSection'>Clothes</div>
                            </div>
                        </Slide>
                    </Col>
                    <Col md={6} className='shop_card'>
                        <Slide direction='right'>
                            <div className='bg-dark'>
                                <img src={accessories} alt="accessories" className='img_shopSection' />
                                <div id='txt_accessories_shopSection'>Accessories</div>
                            </div>
                        </Slide>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ShopSection