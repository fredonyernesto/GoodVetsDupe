import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from '../Hospitals/index.module.css';


const Hospitals = () => {

    return (
        <div>
            <div className={styles['box-to-left']}>
                <div className={styles.content}>
                <h1>Find GoodVets Nearby</h1>
                <p>Share your location using the button below, or<br />
                    enter your zipcode to get started.</p>
                <Button variant="outline-dark" href="/Quiz">Use My Precise Location</Button>
                <p>OR</p>
                <Form>
                    <Row className='mb-3'>
                        <Form.Group className="mb-3" as={Col} controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter zip code" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Find Nearby Locations!
                        </Button>
                    </Row>
                </Form>
                </div>
            </div>
        </div>
    )
};

export default Hospitals;