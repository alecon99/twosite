import { useState, useEffect } from 'react'

import '../NavigationBar/NavigationBar.css'

import { Link } from 'react-router-dom'

import logo from '../../media/logo/logo_extended_white.png'
import { Container } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-regular-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import NavOffcanvas from './NavOffcanvas/NavOffcanvas'

import { nanoid } from 'nanoid'

const NavigationBar = () => {

  const links = [
    { 'href': '/about', 'name': 'About'},
    { 'href': '#', 'name': 'Shop' },
    { 'href': '#', 'name': 'Blog' },
    { 'href': '/contacts', 'name': 'Contacts'}
  ]

  const [scroll, setScroll] = useState(0)

  /* change bg on scroll */
  const onScroll = (e) => {
      setScroll(e.target.documentElement.scrollTop);
  }

  useEffect(() => {
      window.addEventListener('scroll', onScroll);
  }, [])

  return (
    <div className={`py-3 fs-4 fixed-top ${scroll>100 ? 'bg-black':'bg_shadow'}`}>
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
              <Link key={nanoid()} to={link.href}>{link.name}</Link>
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