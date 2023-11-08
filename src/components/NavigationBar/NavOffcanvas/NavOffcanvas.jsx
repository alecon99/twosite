import { useState } from 'react'

import Offcanvas from 'react-bootstrap/Offcanvas';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const NavOffcanvas = ({links}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <div onClick={handleShow} className='text-white'>
            <FontAwesomeIcon icon={faBars} />
        </div>
        
        <Offcanvas show={show} onHide={handleClose} className='bg-black text-white'>
            <Offcanvas.Header>
                <div onClick={handleClose}>
                    <FontAwesomeIcon icon={faX} />
                </div>
            </Offcanvas.Header>
            <Offcanvas.Body>
            {links.map((link) => {
            return (
                <div className='border-bottom p-2'> 
                    <Link to={link.href} className='link_reset fs-4'>{link.name}</Link>
                </div>
            )
          })}
            </Offcanvas.Body>
        </Offcanvas>
        </>
    )
}

export default NavOffcanvas