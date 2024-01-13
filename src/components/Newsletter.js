import { Alert, Col, Row } from "react-bootstrap"
import { useState, useEffect } from "react"


export const Newsletter = ({ onValidated, subscribe, status, message}) => {
    const [ email, setEmail]  = useState('')

    useEffect(() => {
        if(status === 'success') clearFields()
    }, [status])

    const handleSubmit = (e) => {
        e.preventDefault();
      
        if (email.indexOf('@') > -1 && email.length > 0) {
        //   onValidated({
        //     EMAIL: email,
        //   });
          alert('Subscribed');
        } else {
          alert('Please enter a valid email address');
        }
      };
      

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
                        <form onSubmit={handleSubmit} className="ppp" noValidate>
                            <div className="new-email-bx" >
                                <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="example@mail.com" />
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}