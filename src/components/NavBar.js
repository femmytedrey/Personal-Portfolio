import React from 'react'
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import useIconLinks from '../config/useIconLinks';

export const NavBar = () => {
    const [ activeLink, setActiveLink ] = useState('home');
    const [ scrolled, setScrolled ] = useState(false);
    
    const iconLinks = useIconLinks()

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
            <div className='social-icon m-social-icon'>
              {iconLinks.map(link => (
                  <a key={link.id} href={link.url} target='_blank' rel="noopener noreferrer">
                      <img src={link.imageUrl} alt={link.alt} />
                  </a>
              ))}
            </div>
            <Nav.Link href='#connect'><button className='vvo' onClick={() => console.log('connect')}><span>Let's Connect</span></button></Nav.Link>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
