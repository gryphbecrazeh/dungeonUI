import React, { Component } from 'react';
import RaceCard from '../../raceCard/RaceCard';
import {Row,Col,Button,Card,CardText,CardBody,CardTitle,CardSubtitle} from 'reactstrap';
class Race extends Component {
    constructor(props){
        super(props);
        this.state = {
        }    
    }
    render() { 
        return (
            <div>
                <Row>
                    <Col className="text-center bg-primary text-light">
                        <h3>Choose Your Character's Race</h3>
                    </Col>
                </Row>
                    <RaceCard/>
            </div>
        )
    }
}
 
export default Race;