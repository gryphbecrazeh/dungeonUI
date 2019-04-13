import React, { Component } from 'react';
import './App.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fab,faGoogle} from '@fortawesome/free-brands-svg-icons';
import {faDiceD10,fal} from '@fortawesome/pro-light-svg-icons';
import {faDiceD20} from '@fortawesome/pro-solid-svg-icons';
import {Container,Row,Col} from 'reactstrap';
import {Provider} from 'react-redux';
import PageHandler from './components/pageHandler/PageHandler';
import store from './store';

library.add(faDiceD10,faDiceD20,fal,fab,faGoogle);
class App extends Component {
  state={};
  render() {
    return (
      <Provider store={store}>
        <Container fluid={true} className="h-100">
          <Row className="text-light bg-dark sticky-top">
            <Col xs="12" className="text-center">
              <h1>
                <FontAwesomeIcon icon={["fas","dice-d20"]}/>
                Dungeon UI
              </h1>
            </Col>
          </Row>
          <PageHandler/>
        </Container>
      </Provider>
    );
  }
}

export default App;
