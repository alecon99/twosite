import { useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

import '../ScrollToTopSection/ScrollToTopSection.css'

const ScrollToTopSection = () => {

    const [scroll, setScroll] = useState(0)

    const onScroll = (e) => {
        setScroll(e.target.documentElement.scrollTop);
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
    }, [])

    return (
        <>
            {scroll > 400 ?
                    <a href='#' id="scrollToTopBtn">
                        <FontAwesomeIcon icon={faChevronUp} id="scrollToTopIcon"/>
                    </a>
                :
                null
            }
        </>
    )
}

export default ScrollToTopSection