import React, { Component } from 'react';
import {Row, Col, Button} from 'reactstrap';

class ClassPage extends Component {
    state = {
        isLoaded:false,
        races:[],
    }
    componentWillMount(){
        fetch('http://www.dnd5eapi.co/api/races/')
            .then(res=>res.json())
            .then(json => {
                this.setState({
                    isLoaded:true,
                    races:json.results,
                })
            });
    }
    render() {
        const {races}=this.state;
        const raceList=races.map(race =>{

            return (
                <Col xs-12>
                    {race.name}
                </Col>
            );
        });
        return (
            <Row>
                {raceList}
            </Row>
        );
    }
}
 
export default ClassPage;