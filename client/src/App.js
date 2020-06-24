import React from 'react';
//import logo from './logo.svg';
import './App.css';
import API from './api/API';
import {/*Redirect,*/ Route/*,Link*/} from 'react-router-dom';
import {Switch} from 'react-router';
import {AuthContext} from './auth/AuthContext';
import {withRouter} from 'react-router-dom';
import Header from './components/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import LoginForm from './components/LoginForm';
//import Button from 'react-bootstrap/Button';
//import Collapse from 'react-bootstrap/Collapse';
import CarList from './components/CarList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cars : []};
  }

  componentDidMount() {
    API.isAuthenticated().then(
      (user)=> {
        this.setState({authUser : user});
      }
    ).catch((err) => {
      this.setState({authErr : err.errorObj});
      this.props.history.push("/login");
    });
  }
  handleErrors(err){
    if(err){
      if(err.status && err.status === 401) {
        this.setState({authErr: err.errorObj});
        this.props.history.push("/login");
      }
    }
  }

  login = (username, password) => {
    API.userLogin(username, password).then(
      (user) => {
        API.getCars()
        .then((cars) => {
          this.setState({cars: cars, authUser: user, authErr: null});
          this.props.history.push("/cars");
        })
        .catch((errorObj)=> {
          this.handleErrors(errorObj);
        });
      }
    ).catch(
    (errorObj)=> {
      const err0 = errorObj.errors[0];
      this.setState({authErr: err0});
    });
  }

  logout = () => {
    API.userLogout.then((cars) => {
      this.setState({authUser: null, authErr: null, cars: cars});
      API.getCars().catch((errorObj)=> {this.handleErrors(errorObj)});
    });
  }
  getCars = () => {
    API.getCars()
    .then((cars) => this.setState({cars: cars}))
    .catch((errorObj)=> {
      this.handleErrors(errorObj);
    });
  }
  
  render() {
    const value = {
      authUser : this.state.authUser,
      authErr : this.state.authErr,
      loginUser: this.login,
      logoutUser : this.logout
    }
    return(
      <AuthContext.Provider value={value}>
        <Header getCars = {this.getCars}/>
        <Container fluid>

          <Switch>
            <Route path="/">
              <Row className="vheight-100">
                <Col sm={12} className="below-nav">
                  <CarList cars = {this.state.cars} getCars = {this.getCars}/>
                </Col>
              </Row>
            </Route>
            <Route path="/login">
              <Row className="v-height-100">
                <Col sm={4}></Col>
                <Col sm={4} className="below-nav">
                  <LoginForm/>
                </Col>
              </Row>
            </Route>
          </Switch>
        </Container>
      </AuthContext.Provider>
    )
  }
}

export default withRouter(App);
