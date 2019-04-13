import React, { Component } from 'react';
import {Col,Row} from 'reactstrap';
class Magic extends Component {
    state = {  }
    render() { 
        return (
            <Row>
                <Col>
                    Spellcasting Ability:
                </Col>
                <Col>
                    Spell save DC:
                </Col>
                <Col>
                    Spell Attack Bonus:
                </Col>
                <Col>
                    Spell Slots: 4/2
                </Col>
            </Row>
        );
    }
}
 
export default Magic;