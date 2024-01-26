import React, { useState, useEffect } from 'react';
import Carousel from "react-multi-carousel";
import { Col, Container, Row } from 'react-bootstrap'
import "react-multi-carousel/lib/styles.css";
import meter1 from '../assets/img/meter1.svg'
import meter2 from '../assets/img/meter2.svg'
import meter3 from '../assets/img/meter3.svg'
import colorSharp from '../assets/img/color-sharp.png'
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../config/firebase';

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    const [cvDownloadURL, setCvDownloadURL] = useState('');

    const handleDownloadCV = () => {
        window.open(cvDownloadURL, '_blank');
    };

    useEffect(() => {
        const cvStorageRef = ref(storage, 'mycv/FemiDev CV.pdf');
    
        getDownloadURL(cvStorageRef)
            .then((url) => {
                setCvDownloadURL(url);
            })
            .catch((error) => {
                console.error('Error getting download URL:', error);
    
                // If needed, you can set a default or show an error message to the user
                // setCvDownloadURL(DEFAULT_CV_URL);
            });
    }, []);
    

    


  return (
    <section className="skill" id="skills">
        <Container>
            <Row>
                <Col>
                    <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <p>In the realm of web development, I bring a versatile set of skills and expertise.<br></br> 
                            My proficiency includes:
                        </p>
                        <Carousel responsive={responsive} infinite = {true}  className="skill-slider">
                            <div className="item">
                                <img src={meter1} alt = "meter1" />
                                <h5>HTML/CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt = "meter2" />
                                <h5>BOOTSTRAP</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt = "meter3" />
                                <h5>JAVASCRIPT / REACT JS</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt = "meter4" />
                                <h5>UIUX & GRAPHICS DESIGN</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt = "meter1" />
                                <h5>LOGO DESIGNER</h5>
                            </div>
                        </Carousel>
                        <button className="btn col-12 col-sm-12 col-md-6 col-lg-5 py-2 mt-5 downloadbtn" onClick={handleDownloadCV}>Download CV</button>
                    </div>
                    
                </Col>
                
            </Row>
        </Container>
        <img className="background-image-left" src={colorSharp} alt="colorsharp" />
        </section>
  )
}
