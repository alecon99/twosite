import React from 'react'

import logo from '../../media/logo/TWO.png'

import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <div className='bg-black pt-5 text-white'>
      <Container>
        <Row className='text-center text-sm-start'>
          <Col lg={3} xs={12} className='p-2 d-flex align-items-center justify-content-center'>
            <img src={logo} alt="logo" className='logo_lg ' />
          </Col>
          <Col lg={3} md={4} sm={6} className='p-2'>
            <div className='fw-bold fs-5'>FOLLOW US</div>
            <div>instagram</div>
            <div>facebook</div>
            <div>linkedin</div>
          </Col>
          <Col lg={3} md={4} sm={6} className='p-2'>
            <div className='fw-bold fs-5'>POLICY</div>
            <div>privacy</div>
            <div>cookie</div>
            <div>terms and conditions</div>
          </Col>
          <Col lg={3} md={4} sm={6} className='p-2'>
            <div className='fw-bold fs-5'>CUSTOMER SERVICE</div>
            <div>shipping</div>
            <div>returns</div>
            <div>terms and conditions</div>
          </Col>
        </Row>
      </Container>
      <div className='text-center mt-5'>© 2023 The world of cycling </div>
    </div>
  )
}

export default Footer