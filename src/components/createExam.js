import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';

function CreateExam() {

  const [questions, setQuestions] = useState([]);
  const [label, setLabel] = useState("");
  const [examName, setExamName] = useState("");
  const [optionA, setOptionA] = useState("");
  const [optionB, setOptionB] = useState("");
  const [optionC, setOptionC] = useState("");
  const [optionD, setOptionD] = useState("");
  const [solution, setSolution] = useState("");
  return (
    <Container className='mt-1'>
      <Navbar expand="lg" variant="light" bg="light">
        <Container className='p-3'>
          <Navbar.Brand href="#">Global Examination Center</Navbar.Brand>
        </Container>
      </Navbar>
      <Container className='mt-3'>
        <Container className='border border-light bg-light rounded mb-4'>
          <label className='text-primary-emphasis fs-2'>Create Exam</label>
          <p className='mt-2'>Create your exam by adding questions using the form below.</p>
          <p>No of questions added : <span>{questions.length}</span></p>
          <Row className='w-50'>
            <Col><Form.Control className='mb-4' placeholder="Exam Name" value={examName} onChange={(e) => setExamName(e.target.value)} /></Col>
            <Col><Button variant='primary bg-success' onClick={() => {
              axios.post('http://localhost:9000/examinations', {
                examName,
                questions
              })
                .then(function (response) {
                  console.log(response);
                  setExamName("");
                  setQuestions([]);
                })
                .catch(function (error) {
                  console.log(error);
                });
            }}>Create Exam</Button></Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col className='border-end'>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Enter question statement</Form.Label>
                  <Form.Control type="text" placeholder="Enter question" value={label} onChange={(e) => setLabel(e.target.value)} />
                </Form.Group>
                <Form.Label>Enter the four options</Form.Label>
                <Row>
                  <Col>
                    <Form.Control placeholder="Option A" value={optionA} onChange={(e) => setOptionA(e.target.value)} />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Option B" value={optionB} onChange={(e) => setOptionB(e.target.value)} />
                  </Col>
                </Row>
                <Row className='mt-4'>
                  <Col>
                    <Form.Control placeholder="Option C" value={optionC} onChange={(e) => setOptionC(e.target.value)} />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Option D" value={optionD} onChange={(e) => setOptionD(e.target.value)} />
                  </Col>
                </Row>
                <Form.Select className='mt-4' aria-label="Default select example" value={solution} onChange={(e) => setSolution(e.target.value)} >
                  <option>Select the correct answer</option>
                  <option value="A">Option A</option>
                  <option value="B">Option B</option>
                  <option value="C">Option C</option>
                  <option value="D">Option D</option>
                </Form.Select>
                <Button variant="primary" className='mt-4' onClick={(e) => {
                  console.log(e);
                  setQuestions(currentState => [...currentState, { label, optionA, optionB, optionC, optionD, solution }]);
                  setLabel("");
                  setOptionA("");
                  setOptionB("");
                  setOptionC("");
                  setOptionD("");
                  setSolution("");
                }}>
                  Add Question
                </Button>
              </Form>
            </Col>
            <Col>
              <p>Added questions</p>
              {questions.map((question, questionIndex) => <Container className='mt-4' key={questionIndex}>
                <p className='text-danger'>
                  {question.label + ' ?'}
                </p>
                <Row>
                  <Col className='text-secondary'>{'A: ' + question.optionA}</Col>
                  <Col className='text-secondary'>{'B: ' + question.optionB}</Col>
                </Row>
                <Row>
                  <Col className='text-secondary'>{'C: ' + question.optionC}</Col>
                  <Col className='text-secondary'>{'D: ' + question.optionD}</Col>
                </Row>
                <Row className='mt-2'>
                  <Col className='text-success'>{'Solution : ' + question.solution}</Col>
                </Row>
              </Container>)}
            </Col>
          </Row>
        </Container>
      </Container>
    </Container>
  );
}

export default CreateExam;
