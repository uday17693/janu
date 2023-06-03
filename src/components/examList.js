import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import ListGroup from 'react-bootstrap/ListGroup';
import { Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ExamList() {

  const [examinations, setExaminations] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:9000/examinations')
      .then(function (response) {
        setExaminations(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Container className='mt-1'>
      <Navbar expand="lg" variant="light" style={{ backgroundColor: '#e9ecef' }}>
        <Container className='p-3'>
          <Navbar.Brand href="/welcome">Global Examination Center</Navbar.Brand>
        </Container>
      </Navbar>
      <Container className='border border-light bg-light rounded mb-4 mt-3' style={{ minHeight: '300px' }}>
        <Row className='mb-2 p-3 pb-0'>
          Here are the available exams, click on any exam to attend.
        </Row>
        <ListGroup className='w-25 p-3'>
          {examinations && examinations.map((exam, examIndex) =>
            <ListGroup.Item key={examIndex} action onClick={() => { }}>
              <Link style={{ textDecoration: 'none' }} to={'/attendExam/' + (examIndex + 1)}>{exam.examName}</Link>
            </ListGroup.Item>
          )}
        </ListGroup>
      </Container>
    </Container>
  );
}

export default ExamList;
