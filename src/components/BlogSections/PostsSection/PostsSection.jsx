import { useState, useEffect } from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faHeart } from '@fortawesome/free-regular-svg-icons'

import '../PostsSection/PostsSection.css'
import { Link } from 'react-router-dom'

const PostsSection = () => {

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getPosts();
    }, [])

    const getPosts = async () => {
        try {
            setIsLoading(true);
            const data = await fetch(`http://localhost:5050/posts`);
            const response = await data.json();
            setPosts(response.posts);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    console.log(posts);

    return (
        <Container >
            <Row>
                {posts && posts.map((post) => {

                    var dateHour = post.createdAt
                    var dateHourMod = new Date(dateHour);
                    var date = dateHourMod.toISOString().split('T')[0];
                    var data = new Date(date);
                    var mounthName = [
                        "January", "February", "March", "April", "May", "June", "July",
                        "August", "September", "October", "November", "December"
                        ];
                    var day = data.getDate();
                    var mouth = mounthName[data.getMonth()];
                    var year = data.getFullYear();
                    var dataFormattata = `${day} ${mouth} ${year}`;

                    return (
                        <Col lg={4} key={post._id} className=' my-2'>
                            <div className='border border-dark' id='container_post_card'>
                                <div className='bg-dark'>
                                    <img id='img_post_card' src={post.images.image1} alt={post.title} />
                                </div>
                                <div className='bg-black text-white text-center'>{post.category}</div>
                                <div className='px-2'>
                                    <div id='title_post_card' className='fs-2 fw-bold'>{post.title}</div>
                                    <div className='d-flex justify-content-between'>
                                        <div>{dataFormattata}</div>
                                        <div className='d-flex'>
                                            <div className='mx-1'>
                                                <FontAwesomeIcon icon={faHeart} className='me-1' />
                                                {post.likes}
                                            </div>
                                            <div className='mx-1'>
                                                <FontAwesomeIcon icon={faEye} className='me-1' />
                                                {post.views}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default PostsSection