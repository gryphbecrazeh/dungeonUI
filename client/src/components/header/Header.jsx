import React, { Component } from 'react';
import {Row,Input,Col,Progress} from 'reactstrap';
import ViewDetail from '../modals/CharacterDetail/ViewDetail';
import EditDetail from '../modals/CharacterDetail/EditDetail';
import {connect} from 'react-redux';
import {activateModal}from '../../actions/itemActions';

class Header extends Component {
    state = {
    }

    render() {
        let timer;
        const touchduration=500;        
        const touchStarted=(e)=>{
            timer=setTimeout(activated,touchduration);
        }
        const touchEnded=(e)=>{
            if(timer){
                clearTimeout(timer);
                this.props.activateModal('view','name');
            }
        }
        const activated=()=>{
            this.props.activateModal('edit','name')
        }
        return (
            <Row>
                <Col name="characterName" value={this.props.name} onTouchStart={touchStarted} onTouchEnd={touchEnded}>
                    {this.props.name}
                </Col>
                <Col xs="2">
                    Level: {this.props.level||"5"}
                </Col>
                <Col xs="2">{this.props.race||"Half-Elf"}</Col>
                <Col xs="2">{this.props.class||"Ranger"}
                <Progress value={20}/></Col>
                <EditDetail/>
                <ViewDetail/>
            </Row>
        );
    }
}



const mapStateToProps = state =>({
    modal:state.modal
});

export default connect(mapStateToProps,{activateModal})(Header);