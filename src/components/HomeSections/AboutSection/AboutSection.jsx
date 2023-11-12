import React from 'react'

import { Container } from 'react-bootstrap'

import { Zoom } from "react-awesome-reveal";

const AboutSection = () => {
    return (
        <div className='py-5'>
            <Container className='fs-3 my-5 py-5 text-center'>
                <Zoom>
                    The TWO_cycling community was conceived with the aim of creating a strong and lasting bond between cycling enthusiasts, regardless of their specialization. In a context where the passion for cycling takes on multiple forms, from road racing to mountain biking, from cycling tours to competitions, TWO_cycling stands out as the ideal meeting point.
                </Zoom>
            </Container>
        </div>
    )
}

export default AboutSection