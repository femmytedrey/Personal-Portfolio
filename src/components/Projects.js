import React from 'react'
import cocktail from '../assets/img/Cocktail.jpeg'
import calculator from '../assets/img/Calculator.jpeg'
import manage from '../assets/img/Manage.jpeg'
import loopstudio from '../assets/img/LoopStudio.jpeg'
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap'
import { ProjectCard } from './ProjectCard'
import colorSharp2 from '../assets/img/color-sharp2.png'
import TrackVisibility from 'react-on-screen'

export const Projects = () => {
    const projects = [
        {
            title: "TheCocktail",
            description: "Design & Development",
            imgUrl: cocktail,
            url: 'https://cocktail-femidev.netlify.app/'
          },
          {
            title: "Calculator",
            description: "3 themes Calculator",
            imgUrl: calculator,
            url: 'https://modeswitchcalc.netlify.app/'
          },
          {
            title: "Manage",
            description: "Manage landing page",
            imgUrl: manage,
            url: 'https://managelandingpagee.netlify.app/'
          },
          {
            title: "Loop Studio",
            description: "Design & Development",
            imgUrl: loopstudio,
            url: 'https://looopstudiooo.netlify.app/'
          },
          {
            title: "Calculator",
            description: "3 themes Calculator",
            imgUrl: calculator,
            url: 'https://modeswitchcalc.netlify.app/'
          },
          {
            title: "Manage",
            description: "Manage landing page",
            imgUrl: manage,
            url: 'https://managelandingpagee.netlify.app/'
          },
    ];
  return (
    <section className='project' id='projects'>
        <Container>
            <Row>
                <Col size={12}>
                <TrackVisibility>
                    {({isVisible}) => 
                        <div className={` mobile-padding p-0 ${isVisible ? "animate__animated animate__bounceIn" : ''}` }>
                            <h2>Projects</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, elit, sed aliqua.</p>
                        </div>
                    }
                </TrackVisibility>
                    <Tab.Container id='projects-tab' defaultActiveKey='first'>
                        <Nav variant="pills" className='tab-padding nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
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
        <img className='background-image-right' src={ colorSharp2 } alt='colorSharp2'/>
    </section>
  )
}
