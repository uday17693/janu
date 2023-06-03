import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
import logo from '../logo.svg'
import { Link } from 'react-router-dom';

function WelcomePage() {

  return (
    <Container className='mt-1'>
      <Navbar expand="lg" variant="light" style={{ backgroundColor: '#e9ecef' }}>
        <Container className='p-3'>
          <Navbar.Brand href="/welcome">Global Examination Center</Navbar.Brand>
        </Container>
      </Navbar>
      <p className='mt-5 p-2'>
        This is a public site where users can create any test or attempt any test already present on this platform.
      </p>
      <Container className='mt-5'>
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={logo} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">
                  <Link to="/createExam" style={{ color: 'white', textDecoration: 'none' }}>Create Exam</Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={logo} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">
                  <Link to="/examList" style={{ color: 'white', textDecoration: 'none' }}>Give Exam</Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={logo} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">
                  <Link to="/examList" style={{ color: 'white', textDecoration: 'none' }}>Report</Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default WelcomePage;
