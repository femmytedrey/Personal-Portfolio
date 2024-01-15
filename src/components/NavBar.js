import React from 'react'
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

export const NavBar = () => {
    const [ activeLink, setActiveLink ] = useState('home');
    const [ scrolled, setScrolled ] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50){
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }
  return (
    <Navbar expand="lg" className={`navbarOnMobile ${scrolled ? 'scrolled' : ''}`}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="Logo"  className='img-logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto mobile-nav">
              <Nav.Link href="#home" className={`mobile-nav-menu ${activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}`} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={`mobile-nav-menu ${activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}`} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={`mobile-nav-menu ${activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}`} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
        </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href='https://www.linkedin.com/in/ayomide-adeyemo-61865526b/' target='_blank' rel="noopener noreferrer"><img src={navIcon1} alt='' /></a>
                <a href='https://web.facebook.com/adeyemo.ayomide.165/' target='_blank' rel="noopener noreferrer"><img src={navIcon2} alt='' /></a>
                <a href='https://www.instagram.com/only1femmytedrey?igshid=OGQ5ZDc2OK2ZA==' target='_blank' rel="noopener noreferrer"><img src={navIcon3} alt='' /></a>
            </div>
            <Nav.Link href='#connect'><button className='vvo' onClick={() => console.log('connect')}><span>Let's Connect</span></button></Nav.Link>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
