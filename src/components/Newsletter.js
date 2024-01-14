import { Alert, Col, Row } from "react-bootstrap"
import { useState, useEffect, useRef } from "react"
import emailjs from '@emailjs/browser'

export const Newsletter = ({ onValidated, subscribe, status, message}) => {
    const [ email, setEmail]  = useState('');
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        if (email.indexOf('@') > -1 && email.length > 0) {
            emailjs
              .sendForm("service_mcet92i", "template_2f15kte", form.current, "LdM5Jm1VIvmmPqBjL")
              .then(
                (result) => {
                  console.log(result.text);
                  alert("Subscribed");
                  clearFields();
                },
                (error) => {
                  console.log(error.text);
                }
              );
          } else {
            alert("Please enter a valid email address before sending.");
        }
    };

    useEffect(() => {
        if(status === 'success') clearFields()
    }, [status])

    // useEffect(() => {
    //     if(status === 'success') clearFields()
    // }, [status])

    // const handleSubmit = (e) => {
    //     e.preventDefault();
      
    //     if (email.indexOf('@') > -1 && email.length > 0) {
    //     //   onValidated({
    //     //     EMAIL: email,
    //     //   });
    //       alert('Subscribed');
    //     } else {
    //       alert('Please enter a valid email address');
    //     }
    //   };
      

    const clearFields = () => {
        setEmail('')
    }
    return (
        <Col lg={12}>
            <div className="newsletter-bx">
                <Row className="newsletter-mobile">
                    <Col lg={12} md={12} xl={5}>
                        <h3>Subscribe to our Newsletter</h3>
                        {status === 'sending' && <Alert>Sending...</Alert>}
                        {status === 'error' && <Alert variant="danger">{message.toString()}</Alert>}
                        {status === 'success' && <Alert variant="success">{message.toString()}</Alert>}
                    </Col>
                    <Col md={12} xl={7} >
                        <form ref={form} onSubmit={sendEmail} className="ppp" noValidate>
                            <div className="new-email-bx" >
                                <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="example@mail.com" name="user-email" />
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}