import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Row,Col,Progress} from 'reactstrap';
class Health extends Component {
    state = {}
    render() { 
        const {proficiencies,speed,init,ac,health}=this.props;
        const {hp,deathSaves}=health;
        const {current,max}=hp;
        const {success,failures}=deathSaves;
        return (
            <Row>
                <Col>
                    <div id="currentHitPoints">
                        Hit Points: {current}/{max}
                        <FontAwesomeIcon className="ml-1" icon={["fal","dice-d10"]}/>
                        <FontAwesomeIcon className="" icon={["fal","dice-d10"]}/>
                        <FontAwesomeIcon className="" icon={["fal","dice-d10"]}/>
                        <FontAwesomeIcon className="" icon={["fal","dice-d10"]}/>
                        <FontAwesomeIcon className="" icon={["fal","dice-d10"]}/>

                        <Progress className="" color="success" value={current/max*100||32}/>

                    </div>
                    {/* <div id="death-saves">
                        Death Saves:  
                        <input type="checkbox" name="1st Attempt" id="attempt1"/>
                        <input type="checkbox" name="2nd Attempt" id="attempt2"/>
                        <input type="checkbox" name="3rd Attempt" id="attempt3"/>
                    </div> */}
                </Col>
                <Col>
                    AC: {ac}
                </Col>
                <Col>
                    Init: {init}
                </Col>
                <Col>
                Speed: {speed}
                </Col>
            </Row>
        );
    }
}
 
export default Health;