import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import styles from '../Portal/index.module.css';

const Portal = () => {
    return(
        <div className={styles["page-content"]}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <Row>
                        <h2>GoodVets logo goes here</h2>
                        <h1>Welcome to GoodVets</h1>
                        <p>You pet's care simplified. Manage<br/>
                        appointments, get real-time notifications, and<br/>
                        track your pet's care in the GoodVets app.</p>
                        <Button variant="outline-dark" href="/Quiz">Create Account</Button>
                        <Button variant="outline-dark" href="/Quiz">Log in</Button>
                    </Row>
                </div>
            </div>
            <div>
                <p>This is where the image goes!</p>
            </div>
        </div>
    )
};

export default Portal;