import React, { Component } from 'react';
import {Row,Col} from 'reactstrap';
class Bonuses extends Component {
    state = {  }
    render() { 
        return (
            <Row>
                <Col>
                    {/* Maybe get rid of this one, I will be adding a blue border around the stats that are saving throws */}
                    Saving Throws:
                </Col>
                <Col>
                    Proficiency Bonus:
                </Col>
                <Col>
                    Inspiration:
                </Col>
                <Col>
                    Passive Wisdom:
                </Col>
            </Row>
            
        );
    }
}
 
export default Bonuses;