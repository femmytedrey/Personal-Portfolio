import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const delta = useRef(300 - Math.random() * 100);

    const toRotate = useMemo(() => ['Front-end Developer', 'Graphics Designer', 'Logo Designer', 'UI/UX Designer'], []);

    const tick = useCallback(() => {
        let i = loopNum % toRotate.length;
        let fulltext = toRotate[i];
        let updatedText = isDeleting ? fulltext.substring(0, text.length - 1) : fulltext.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            delta.current /= 2;
        }

        if (!isDeleting && updatedText === fulltext) {
            setIsDeleting(true);
            delta.current = 2000; // Set to your desired period
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum((prevLoopNum) => prevLoopNum + 1);
            delta.current = 500;
        }
    }, [loopNum, text, isDeleting, toRotate]);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta.current);

        return () => {
            clearInterval(ticker);
        };
    }, [tick]);

    return (
        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div className={`animate__animated ${isVisible ? 'animate__fadeIn' : ''}`}>
                                    <span className='tagline'>Welcome to my Portfolio</span>
                                    <h1>{`Hi I'm FemiDev! `}<span className='wrap'>{text}</span></h1>
                                    <p>I'm a frontend developer with a passion for crafting seamless and engaging digital experiences. From intuitive user interfaces to responsive designs, I bring ideas to life. Let's collaborate to enhance your online presence!</p>
                                    <a href='#connect' className='letsconnect'><button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25} /></button></a>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt='Header' />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
