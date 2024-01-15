import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ChimpForm } from './ChimpForm'
import logo from '../assets/img/logo.png'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import { Github } from 'react-bootstrap-icons';

export const Footer = () => {
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
                        <a href='https://www.linkedin.com/in/ayomide-adeyemo-61865526b/' target='_blank' rel="noopener noreferrer"><img src={navIcon1} alt='Linkedin' /></a>
                        <a href='https://web.facebook.com/adeyemo.ayomide.165/' target='_blank' rel="noopener noreferrer"><img src={navIcon2} alt='facebook' /></a>
                        <a href='https://github.com/femmytedrey/' target='_blank' rel="noopener noreferrer"><Github className='github' /></a>
                    </div>
                    <p>CopyRIght 2024. All Right Reserved</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}
