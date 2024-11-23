import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import { Col, Container, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../config/firebase";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const skills = [
    { id: 1, name: "HTML/CSS", icon: meter1 },
    { id: 2, name: "Bootstrap", icon: meter2 },
    { id: 3, name: "Tailwind CSS", icon: meter1 },
    { id: 4, name: "JavaScript", icon: meter3 },
    { id: 5, name: "React JS | Next JS", icon: meter1 },
    { id: 6, name: "Vue JS", icon: meter3 },
    { id: 7, name: "Node JS | Express JS", icon: meter3 },
    { id: 8, name: "UI/UX & Graphics Design", icon: meter1 },
    { id: 9, name: "Logo Design", icon: meter1 },
  ];

  const [cvDownloadURL, setCvDownloadURL] = useState("");

  const handleDownloadCV = () => {
    window.open(cvDownloadURL, "_blank");
  };

  useEffect(() => {
    const cvStorageRef = ref(storage, "mycv/My Resume.pdf");

    getDownloadURL(cvStorageRef)
      .then((url) => {
        setCvDownloadURL(url);
      })
      .catch((error) => {
        console.error("Error getting download URL:", error);
      });
  }, []);

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                In the realm of web development, I bring a versatile set of
                skills and expertise.
                <br />
                My proficiency includes:
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                {skills.map((skill) => (
                  <div className="item" key={skill.id}>
                    <img src={skill.icon} alt={skill.name} />
                    <h5>{skill.name}</h5>
                  </div>
                ))}
              </Carousel>
              <button
                className="btn col-12 col-sm-12 col-md-6 col-lg-5 py-2 mt-5 downloadbtn"
                onClick={handleDownloadCV}
              >
                Download CV
              </button>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="colorsharp"
      />
    </section>
  );
};
