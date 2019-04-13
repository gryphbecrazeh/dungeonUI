import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
    LOGIN,
    CHARACTER_SELECT,
    CHARACTER_SHEET,
    CHOOSE_RACE
} from './pages';
import CharacterSelect from "../pages/characterSelect/CharacterSelect";
import Login from '../pages/login/Login';
import CharacterSheet from "../pages/characterSheet/CharacterSheet";

class PageHandler extends Component {
    state = {  }
    render() {
        const {activePage}=this.props.activePage;
        switch(activePage){
            case CHARACTER_SELECT:
                return(
                    <CharacterSelect/>
                )
            case LOGIN:
                return(
                    <Login/>
                )
            case CHARACTER_SHEET:
                return(
                    <CharacterSheet/>
                )
            default:
                return(
                    <CharacterSelect/>
                )
        }
    }
}
const mapStateToProps = state =>({
    item:state.item,
    activePage:state.activePage,
    activeCharacter:state.character
});

export default connect(mapStateToProps,{})(PageHandler);