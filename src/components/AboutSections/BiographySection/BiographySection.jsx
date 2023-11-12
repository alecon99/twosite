import React from 'react'

import Biography1 from '../BiographySection/Biography1/Biography1'
import Biography2 from '../BiographySection/Biography2/Biography2'
import Biography3 from '../BiographySection/Biography3/Biography3'
import { Container } from 'react-bootstrap'

const BiographySection = () => {
    return (
        <div>
            <Container id='biographySection_container'>
                <Biography1 />
                <Biography2 />
                <Biography3 />
            </Container>
        </div>
    )
}

export default BiographySection