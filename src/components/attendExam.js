import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

function AttendExam(props) {

  const { id } = useParams();

  const [exam, setExam] = useState({});
  const [showResultModal, setShowResultModal] = useState(false);
  const [percentage, setPercentage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:9000/examinations/' + id)
      .then(function (response) {
        setExam(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const submitExam = () => {
    console.log(exam);
    let successPercent = '0%', numberOfCorrectAnswers = 0;
    exam.questions.forEach(question => {
      if (question.solution === question.userInput) {
        ++numberOfCorrectAnswers;
      }
    });
    if (numberOfCorrectAnswers > 0) {
      successPercent = ((numberOfCorrectAnswers / exam.questions.length) * 100) + "%";
    }
    setPercentage(successPercent);
    setShowResultModal(true);
  };

  return (
    <Container className='mt-1'>
      <Navbar expand="lg" variant="light" style={{ backgroundColor: '#e9ecef' }}>
        <Container className='p-3'>
          <Navbar.Brand href="/welcome">Global Examination Center</Navbar.Brand>
        </Container>
      </Navbar>
      <Container className='border border-light bg-light rounded mb-4 mt-3' style={{ minHeight: '300px' }}>
        <Row className='mb-2 p-2 pb-0'>
          <label className='text-primary-emphasis fs-2'>{exam ? exam.examName : ''}</label>
        </Row>
        <Form className='p-3'>
          {exam.questions ? exam.questions.map((question, questionIndex) => {
            return (
              <Form.Group className="mb-3">
                <Form.Label>{(questionIndex + 1) + ') ' + question.label}</Form.Label>
                <Form.Check
                  type={'radio'}
                  id={'optionA' + questionIndex}
                  name={'question' + questionIndex}
                  label={question.optionA}
                  onChange={(e) => {
                    question.userInput = 'A';
                    setExam({ ...exam });
                  }}
                />
                <Form.Check
                  type={'radio'}
                  id={'optionB' + questionIndex}
                  name={'question' + questionIndex}
                  label={question.optionB}
                  onChange={(e) => {
                    question.userInput = 'B';
                    setExam({ ...exam });
                  }}
                />
                <Form.Check
                  type={'radio'}
                  id={'optionC' + questionIndex}
                  name={'question' + questionIndex}
                  label={question.optionC}
                  onChange={(e) => {
                    question.userInput = 'C';
                    setExam({ ...exam });
                  }}
                />
                <Form.Check
                  type={'radio'}
                  id={'optionD' + questionIndex}
                  name={'question' + questionIndex}
                  label={question.optionD}
                  onChange={(e) => {
                    question.userInput = 'D';
                    setExam({ ...exam });
                  }}
                />
              </Form.Group>
            );
          }) : ''}
          <Button variant="secondary m-1">
            <Link to="/examList" style={{ textDecoration: 'none', color: 'white' }} >Cancel</Link>
          </Button>
          <Button variant="success" onClick={submitExam}>Submit</Button>
        </Form>
      </Container>
      <Modal show={showResultModal} onHide={() => setShowResultModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Result</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you finished the exam with {percentage}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary">
            <Link to={'/examList'} style={{ textDecoration: 'none', color: 'white' }}>Back to list</Link>
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default AttendExam;
