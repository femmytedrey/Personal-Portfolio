import React from 'react'
import { useState, useRef } from 'react'
import contactImg from '../assets/img/contact-img.svg'
import { Container, Row, Col } from 'react-bootstrap'
import emailjs from '@emailjs/browser'

export const Contact = () => {
    const formInitialDetails = {
         firstName: '',
         lastName: '',
         email: '',
         phone: '',
         message: '',
    }

    const [ formDetails, setFormDetails ] = useState(formInitialDetails);
    const [ buttonText, setButtonText ] = useState('send');
    const [ status, setStatus ] = useState({});
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]+$/;

        if(formDetails.firstName.trim() === '' || !isNaN(formDetails.firstName.trim())){
            alert('Please provide a valid first name');
            setButtonText('Send')
            return
        } else if(formDetails.lastName.trim() === '' || !isNaN(formDetails.lastName.trim())){
            alert('Please provide a valid last name');
            setButtonText('Send')
            return
        } else if (!emailRegex.test(formDetails.email.trim())) {
            alert('Please provide a valid email address');
            setButtonText('Send')
            return;
        } else if (formDetails.phone.trim() === '' || !phoneRegex.test(formDetails.phone.trim())){
            alert('Please provide a valid phone number')
            setButtonText('Send')
            return;
        } else if (formDetails.message.trim() === ''){
            alert('Message field cannot be empty')
            setButtonText('Send')
            return;
        } else{
            emailjs.sendForm('service_mcet92i', 'template_xw54fes', form.current, 'LdM5Jm1VIvmmPqBjL')
            .then((result) => {
                if (result.status === 200){
                    setStatus({ success: true, message: 'Email sent successfully' })
                    setButtonText('Sent')
                }
                
                setTimeout(() => {
                    setButtonText('Send')
                }, 3000);
                formDetails.firstName = ''
                formDetails.lastName = ''
                formDetails.email = ''
                formDetails.phone = ''
                formDetails.message = ''

            }, (error) => {
                console.log(error.text);
            });
        }
        
      };

    const onFormUpdate = (category, value) => {
         setFormDetails({
             ...formDetails,
             [category]: value
         })
    }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setButtonText('Sending...');
    //     let response = await fetch('http://localhost:5000/contact', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'Application/json;charset=utf-8'
    //         },
    //         body: JSON.stringify(formDetails)
    //     });
    //     setButtonText('Send');
    //     let result = response.json();
    //     setFormDetails(formInitialDetails);
    //     if(result.code === 200){
    //         setStatus({ success: true, message: 'Message sent successfully'})
    //     } else {
    //         setStatus({ success: false, message: 'Something went wrong, please try again later'})
    //     }
    // };

  return (
    <section className='contact' id='connect'>
        <Container>
            <Row className='align-items-center'>
                <Col md={6}>
                    <img src={contactImg} alt='Contact Us' />
                </Col>
                <Col md={6}>
                    <h2>Get In Touch</h2>
                    <form ref={form} onSubmit={sendEmail} noValidate>
                        <Row className='px-2'>
                            <Col sm={6} className='px-1'>
                                <input name='fname' id='fname' type='text' value={formDetails.firstName} placeholder='First Name' onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                            </Col>
                            <Col sm={6} className='px-1'>
                                <input name='lname' id='lname' type='text' value={formDetails.lastName} placeholder='Last Name' onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                            </Col>
                            <Col sm={6} className='px-1'>
                                <input name='user-email' id='email' type='email' value={formDetails.email} placeholder='example@mail.com' onChange={(e) => onFormUpdate('email', e.target.value)} />
                            </Col>
                            <Col sm={6} className='px-1'>
                            <input name='telephone' id='tel' type='tel' value={formDetails.phone} placeholder='(123) 4567 890' onChange={(e) => onFormUpdate('phone', e.target.value)} />
                            </Col>
                            <Col className='px-1'>
                                <textarea name='message' rows='6' value={formDetails.message} placeholder='Message' onChange={(e) => onFormUpdate('message', e.target.value)} />
                                {
                                    status.message &&
                                    <Row>
                                        <p className={status.success === false ? 'danger' : 'success'}>{status.message}</p>
                                    </Row>
                                }
                                <button type='submit'><span>{buttonText}</span></button>
                            </Col>
                            
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
