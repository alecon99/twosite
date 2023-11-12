import { useState } from 'react'

import '../EmailSection/EmailSection.css'

import { Container, Form } from 'react-bootstrap'

import { Zoom } from "react-awesome-reveal";

const EmailSection = () => {

    const [Name, SetName] = useState("")
    const [Subject, SetSubject] = useState("")
    const [Text, SetText] = useState("")
    const [ShowCopy, SetShowCopy] = useState(false)
    const [ShowAlertForm, SetShowAlertForm] = useState(false)

    /* copied alert */
    const copyEmail = ()=>{
        navigator.clipboard.writeText("two.cycling.e@gmail.com")
        SetShowCopy(true)
        setTimeout(resetCopy, 3000);
    }

    const resetCopy = ()=> {
        SetShowCopy(false)
    }

    /* form alert */
    const alertForm = ()=>{
        SetShowAlertForm(true)
        setTimeout(resetAlertForm, 3000);
    }

    const resetAlertForm = ()=>{
        SetShowAlertForm(false)
    }

    /* clear form data */
    const clear = ()=>{
        var form = document.getElementById("form");
        form.reset();
    
        SetName("")
        SetSubject("")
        SetText("")
    }

    return (
        <div className='fullScreen' id='Email_bg'>
            <Container id='Email_container'>
                <Zoom>
                    <Form className='bg_email p-2 p-sm-4 p-md-5 rounded-4' id='form'>
                        <div className='text-center mb-5'>
                            <div className='fs-3 fw-bold mb-2'>Contact us</div>
                            <div onClick={copyEmail}>two.cycling.e@gmail.com</div>
                            <div id='copied_message' className={`bg-black px-2 mt-1 text-white rounded-3 ${ShowCopy ? "d-block":"d-none"}`}>copied</div>
                        </div>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name/Company</Form.Label>
                            <Form.Control type="text" onChange={(e) => SetName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSubject">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control type="text" onChange={(e) => SetSubject(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as='textarea' onChange={(e) => SetText(e.target.value)}
                            />
                        </Form.Group>
                        <div className='d-flex justify-content-between align-items-center'>
                            {Name !== "" && Subject !== "" && Text !== "" ?
                            <a className='btn btn-dark' href={`mailto:two.cycling.e@gmail.com?subject=(${Name})%20${Subject}&body=${Text}`} onClick={clear}>SEND</a>
                            :
                            <div className='d-flex align-items-center'>
                                <div className='btn btn-dark me-3' onClick={alertForm}>SEND</div>
                                <div className={`text-danger ${ShowAlertForm ? "d-block":"d-none"}`}>Insert all the data</div>
                            </div> 
                            }
                            {Name !== "" || Subject !== "" || Text !== "" ?
                            <div onClick={clear} className='btn'>Clear</div>
                            :
                            null
                            }
                        </div>
                    </Form>
                </Zoom>
            </Container>
        </div>
    )
}

export default EmailSection