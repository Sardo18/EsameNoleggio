import React from 'react';
import './App.css';
import Header from './components/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
//import Button from 'react-bootstrap/Button';
import CarList from './components/CarList';
import API from './api/API';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cars : []};
  }

  componentDidMount() {
    API.getCars().then((cars) => this.setState({cars: cars}));
  }
  
  
  render() {
    return(
      <>
      <Header />
      <Container fluid>
        <Row className="vheight-100">
        <Col sm={4} bg="light" id="left-sidebar" className="collapse d-sm-block below-nav">
                Ciao
              </Col>
          <Col sm={8} className="below-nav">
          <CarList cars = {this.state.cars} />
          
          </Col>

          </Row>
      </Container>
    </>
  );
}
}

export default App;

