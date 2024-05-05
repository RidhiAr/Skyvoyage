import React from 'react'
import './newsletter.css'
import { Container, Row, Col } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'

const Newsletter = () => {
    return (
        <section className='newsletter'>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className="newsletter__content">
                            <h2>Subscribe now to get latest updates and early bird discount.</h2>

                            <div className="newsletter__input">
                                <input type="email" placeholder='Enter your email' />
                                <button className="btn newsletter__btn">Subscribe</button>
                            </div>
                            <p>
                            Stay updated on upcoming events, exclusive offers, and more.
Follow us on social media for behind-the-scenes sneak peeks and event highlights.
For any inquiries or assistance, feel free to reach out to our friendly support team. 
                            </p>
                        </div>
                    </Col>
                    <Col lg='6'>
                        <div className="newsletter__img">
                            <img src={maleTourist} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Newsletter