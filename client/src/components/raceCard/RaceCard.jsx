import React, { Component } from 'react';
import {Row,Col,Button,Card,CardText,CardBody,CardTitle,CardSubtitle} from 'reactstrap';

class RaceCard extends Component {
    state = {
        isLoaded:false,
        races:[],
        details:[]
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
    // Get the details of the race object after it's been created, because I obviously don't understand react life cycles yet
    render() { 
        const {races} = this.state;
        const racesWithDetails=[];
        const raceList = races.map((race,index) =>{
                fetch(race.url)
                .then(res=>res.json())
                .then(json=>{
                    // add expanded details to
                    // race object, to reference later
                    racesWithDetails.push(json);
                });
        });
        return (
            <Row>
                {racesWithDetails}
            </Row>
        );
    }
}
 
export default RaceCard;