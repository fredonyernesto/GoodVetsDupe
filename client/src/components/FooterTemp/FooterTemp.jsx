import { Container, Row, Col, Stack } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTiktok } from '@fortawesome/free-brands-svg-icons';
import '../FooterTemp/index.css'

function Footer() {
    return (
        <div className="footer">
            <Container>
                <Row className="footer-row">
                    
                    {/* Column #1 */}
                    <Col lg={3} className="footer-section footer-locations">
                        <h4 className="footer-title">Locations</h4>
                        <ul className="footer-list footer-list-locations">
                            {/* Add list items here */}
                        </ul>
                    </Col>

                    {/* Column #2 with two lists side-by-side */}
                    <Col lg={3} className="footer-section footer-clients-team">
                        <Row className="footer-inner-row">
                            
                            <Col md={6} className="footer-subsection footer-clients">
                                <h4 className="footer-title">Clients</h4>
                                <ul className="footer-list footer-list-clients">
                                    <li className="footer-list-item">Services</li>
                                    <li className="footer-list-item">Virtual Care</li>
                                    <li className="footer-list-item">Wellness Plans</li>
                                    <li className="footer-list-item">Journal</li>
                                    <li className="footer-list-item">FAQ</li>
                                </ul>
                            </Col>

                            <Col md={6} className="footer-subsection footer-team">
                                <h4 className="footer-title">Team</h4>
                                <ul className="footer-list footer-list-team">
                                    <li className="footer-list-item">Partner with Us</li>
                                    <li className="footer-list-item">Associate Vets</li>
                                    <li className="footer-list-item">New Grads</li>
                                    <li className="footer-list-item">Technicians & Staff</li>
                                    <li className="footer-list-item">Open Roles</li>
                                </ul>
                            </Col>

                        </Row>
                    </Col>

                    {/* Column #3 */}
                    <Col lg={4} className="footer-section footer-info">
                    <div className='footer-icons'>
                        <FontAwesomeIcon icon={faInstagram}  size="3x"/>
                        <FontAwesomeIcon icon={faLinkedin} size="3x"/>
                        <FontAwesomeIcon icon={faTiktok} size="3x"/>
                        <FontAwesomeIcon icon={faFacebook} size="3x"/>
                    </div>
                        <ul className="footer-list footer-list-info">
                            <li className="footer-list-item">Terms & Legal</li>
                            <li className="footer-list-item">Privacy Policy</li>
                            <li className="footer-list-item">Wellness Terms</li>
                            <li className="footer-list-item">©2024 GOODVETSDUPE</li>
                        </ul>
                    </Col>

                </Row>
            </Container>
        </div>
    );
}

export default Footer;
