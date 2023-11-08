import React from 'react'

import '../NavigationBar/NavigationBar.css'

import { Link } from 'react-router-dom'

import logo from '../../media/TWOextended.png'
import { Container } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-regular-svg-icons'
import NavOffcanvas from './NavOffcanvas/NavOffcanvas'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const NavigationBar = () => {

  const links = [
    { 'href': '#', 'name': 'About' },
    { 'href': '#', 'name': 'Shop' },
    { 'href': '#', 'name': 'Blog' },
    { 'href': '#', 'name': 'Contacts' }
  ]

  return (
    <div className='bg-black py-3 fs-4 fixed-top'>
      <Container className='d-flex justify-content-between align-items-center'>
        <div className='d-md-none nav_item'>
          <NavOffcanvas  links={links}/>
        </div>
        <Link to={'/'} className='nav_item'>
          <img src={logo} alt="logo" className='logo' />
        </Link>
        <div className='nav_links nav_item text-center d-none d-md-block'>
          {links.map((link) => {
            return (
              <a href={link.href}>{link.name}</a>
            )
          })}
        </div>
        <div className='nav_item'>
          <div className='d-flex align-items-center  justify-content-end'>
            <a href="#" className='p-0'>
              <FontAwesomeIcon icon={faCircleUser} className='me-2 text-white'/>
            </a>
            <a href="#" className='p-0'>
              <FontAwesomeIcon icon={faCartShopping} className='text-white'/>
            </a>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default NavigationBar