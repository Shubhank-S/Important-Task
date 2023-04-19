import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import VideoItem from './video/VideoItem';

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col style={{ border: "2px solid red" }}>
            <Form.Control size="lg" type="text" placeholder="Search Videaos" />

          </Col>
          <Col style={{ border: "2px solid red" }}>
            {/* <Form.Control size="lg" type="text" placeholder="Large text" /> */}
            <Button variant="primary" size="lg">
              Search
            </Button>
          </Col>
        </Row>
        <Row>
          <VideoItem />
        </Row>
      </Container>
    </div>
  )
}

export default App; 