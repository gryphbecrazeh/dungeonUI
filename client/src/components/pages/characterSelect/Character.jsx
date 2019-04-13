import React, { Component } from 'react';
import {
    Button,
	ListGroupItem,
	ListGroupItemHeading,
	ButtonDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from 'reactstrap';
import {connect} from 'react-redux';
import {delItem,selectCharacter,changePage} from '../../../actions/itemActions';
import {CHARACTER_SHEET}from '../../pageHandler/pages';
class Character extends Component {
    constructor(props){
        super(props);
        this.state={
            dropdownOpen:false
        }
    }
    toggle=()=>{
		this.setState({
			dropdownOpen:!this.state.dropdownOpen
		});
	}
    onDeleteClick=()=>{
        this.props.delItem(this.props._id);
    }
    onCharacterSelect=()=>{
        const {selectCharacter,changePage,index}=this.props;
        selectCharacter(this.props.item.items[index]);
        changePage(CHARACTER_SHEET);
    }
    render() { 
        const {_id,name,level,race,charClass}=this.props;
        return (
        <ListGroupItem key={_id}>
            <ListGroupItemHeading className="text-secondary">
                {level||"Level 0"} {race||"No race selected"} {charClass||"Villager"}
            </ListGroupItemHeading>
            <ButtonDropdown className="d-block w-100" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <Button onClick={this.onCharacterSelect} id="caret">{name}</Button>
                <DropdownToggle color="danger" caret/>
                <DropdownMenu>
                    <DropdownItem onClick={this.onDeleteClick}>
                        Delete
                    </DropdownItem>

                </DropdownMenu>

            </ButtonDropdown>
        </ListGroupItem>
);
    }
}
const mapStateToProps = state =>({
    item:state.item,
    activeCharacter:state.activeCharacter,
    activePage:state.activePage

});
export default connect(mapStateToProps,{delItem,selectCharacter,changePage})(Character);