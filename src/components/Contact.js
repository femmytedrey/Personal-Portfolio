import React from 'react'
import { useState } from 'react'
import contactImg from '../assets/img/contact-img.svg'
import { Container, Row, Col } from 'react-bootstrap'

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    }

    const [ formDetails, setFormDetails ] = useState(formInitialDetails);
    const [ buttonText, setButtonText ] = useState('send');
    const [ status, setStatus ] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

  return (
    <section className='contact' id='connect'>
        <Container>
            <Row className='align-items-center'>
                <Col md={6}>
                    <img src={contactImg} alt='Contact Us' />
                </Col>
                <Col md={6}>
                    <h2>Get In Touch</h2>
                    <form>
                        <Row>
                            <Col sm={6} className='px-1'>
                                <input type='text' value={formDetails.firstName} placeholder='First Name' onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                            </Col>
                            <Col sm={6} className='px-1'>
                            <input type='text' value={formDetails.lastName} placeholder='Last Name' onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                            </Col>
                            <Col sm={6} className='px-1'>
                                <input type='email' value={formDetails.email} placeholder='example@mail.com' onChange={(e) => onFormUpdate('email', e.target.value)} />
                            </Col>
                            <Col sm={6} className='px-1'>
                            <input type='tel' value={formDetails.phone} placeholder='(123) 4567 890' onChange={(e) => onFormUpdate('phone', e.target.value)} />
                            </Col>
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
    </section>
  )
}