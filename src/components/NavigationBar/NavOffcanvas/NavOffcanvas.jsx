import { useState } from 'react'
import { nanoid } from 'nanoid'

import Offcanvas from 'react-bootstrap/Offcanvas';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft, faBars, faX } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

const NavOffcanvas = ({ links }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div onClick={handleShow} className='text-white'>
                <FontAwesomeIcon icon={faBars} />
            </div>

            <Offcanvas show={show} onHide={handleClose} className='bg-black text-white'>
                <Offcanvas.Header className='fs-3'>
                    <div onClick={handleClose}>
                        <FontAwesomeIcon icon={faArrowCircleLeft} />
                    </div>
                    <Link to={"/"} className='link_reset'>
                        HOME
                    </Link>
                </Offcanvas.Header>
                <Offcanvas.Body className='d-flex flex-column justify-content-between'>
                    <div>
                        {links.map((link) => {
                            return (
                                <div key={nanoid()} className='border-bottom p-2'>
                                    <Link to={link.href} className='link_reset fs-1'>{link.name}</Link>
                                </div>
                            )
                        })}
                    </div>
                    <div className='border-top pt-3 d-flex justify-content-evenly fs-1'>
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faLinkedin} />
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default NavOffcanvas