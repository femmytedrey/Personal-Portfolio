import React from 'react'
import { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from '../assets/img/header-img.svg'

export const Banner = () => {
    const [ loopNum, setLoopNum ] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ 'Front-end Developement', 'Graphics Designer', 'Logo Designer', 'UI/UX Designer' ];
    const [ text, setText ] = useState('');
    const [ delta, setDelta ] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) }
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fulltext = toRotate[i];
        let updatedText = isDeleting ? fulltext.substring(0, text.length - 1) : fulltext.substring(0, text.length + 1)

        setText(updatedText);

        if(isDeleting) {
            setDelta(prevData => prevData/2)
        }

        if(!isDeleting && updatedText === fulltext) {
            setIsDeleting(true);
            setDelta(period)
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }

  return (
    <section className='banner' id='home'>
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                    <span className='tagline'>Welcome to my Portfolio</span>
                    <h1>{`Hi I'm FemiDev `}<span className='wrap'>{text}</span></h1>
                    <p>Aspiring developer on a journey to learn and grow in the world of coding. Excited about building software and exploring new technologies.</p>
                    <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25}/></button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt='Header Img' />
                </Col>
            </Row>
        </Container>
    </section>
  )
}