import React, { Component } from 'react';
import {
    Row,
    Col,
    Button
} from 'reactstrap';
import Header from '../../header/Header';
import Health from '../../health/Health';
import Stats from '../../stats/Stats';
import Magic from '../../magic/Magic';
import Bonuses from '../../bonuses/Bonuses';
import {connect} from 'react-redux';

class CharacterSheet extends Component {
    state = {  }
    render() { 
        const {name,health,stats,initiative,armorClass,proficiencies,speed}=this.props.activeCharacter.activeCharacter.sheet;
        return (
            <Row className="mt-2">
                <Col xs="12">
                    <Header name={name}/>
                    <Health init={initiative}health={health}ac={armorClass}proficiencies={proficiencies}speed={speed}/>
                    <Stats stats={stats}/>
                    <Magic/>
                    <Bonuses/>
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = state =>({
    activePage:state.activePage,
    activeCharacter:state.activeCharacter
});

export default connect(mapStateToProps,{})(CharacterSheet);