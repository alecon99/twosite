import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Slide from 'react-reveal/Slide';

import '../ShopSection/ShopSection.css'

import clothes from '../../../media/clothes.jpeg'
import accessories from '../../../media/accessories.png'

const ShopSection = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={6} className='shop_card'>
                        <Slide left>
                            <div className='bg-dark'>
                                <img src={clothes} alt="clothes" className='img_shopSection' />
                                <div id='txt_clothes_shopSection'>Clothes</div>
                            </div>
                        </Slide>
                    </Col>
                    <Col md={6} className='shop_card'>
                        <Slide right>
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