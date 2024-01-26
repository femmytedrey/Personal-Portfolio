import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ChimpForm } from './ChimpForm'
import logo from '../assets/img/logo.png'
import useIconLinks from '../config/useIconLinks'

export const Footer = () => {
    const iconLinks = useIconLinks();

  return (
    <footer className='footer'>
        <Container>
            <Row className='align-item-center'>
                <ChimpForm />
                <Col sm={6}>
                    <img src={logo} alt="logo" className='footer-logo'/>
                </Col>
                <Col sm={6} className='text-center text-sm-end'>
                    <div className='social-icon mt-3'>
                        {iconLinks.map(link => (
                            <a key={link.id} href={link.url} target='_blank' rel="noopener noreferrer">
                            <img src={link.imageUrl} alt={link.alt} />
                            </a>
                        ))}
                    </div>
                    <p>CopyRIght 2023. All Right Reserved</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}
