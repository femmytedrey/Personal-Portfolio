import React from 'react'
import projImg1 from '../assets/img/project-img1.png'
import projImg2 from '../assets/img/project-img2.png'
import projImg3 from '../assets/img/project-img2.png'
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap'
import { ProjectCard } from './ProjectCard'
import colorSharp2 from '../assets/img/color-sharp2.png'
import TrackVisibility from 'react-on-screen'

export const Projects = () => {
    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
            url: 'https://www.facebook.com'
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
            url: 'https://www.google.com'
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
            url: 'https://www.google.com'
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
            url: 'https://www.netlify.com'
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
            url: 'https://www.google.com'
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
            url: 'https://www.twitter.com'
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
            url: 'https://www.google.com'
          },
    ];
  return (
    <section className='project' id='projects'>
        <Container>
            <Row>
                <Col size={12}>
                <TrackVisibility>
                    {({isVisible}) => 
                        <div className={isVisible ? "animate__animated animate__bounceIn" : '' }>
                            <h2>Projects</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, elit, sed aliqua.</p>
                        </div>
                    }
                </TrackVisibility>
                    <Tab.Container id='projects-tab' defaultActiveKey='first'>
                        <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third" >Tab  3</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content id='slideInUp'>
                            <Tab.Pane eventKey='first'>
                                <Row className='proj-container'>
                                    {
                                        projects.map((project, index) => {
                                            return(
                                                <ProjectCard key={index} {...project} />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey='second'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p></Tab.Pane>
                            <Tab.Pane eventKey='third'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p></Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Col>
            </Row>
        </Container>
        <img className='background-image-right' src={ colorSharp2 } />
    </section>
  )
}
