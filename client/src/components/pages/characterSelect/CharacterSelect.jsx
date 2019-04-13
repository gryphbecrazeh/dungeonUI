import React, { Component } from "react";
import {
	Row,
	Col,
	ListGroup,
	ListGroupItem,
	ListGroupItemHeading
} from "reactstrap";
import {connect} from 'react-redux';
import {getItems} from '../../../actions/itemActions';
import PropTypes from 'prop-types';
import NewCharacter from '../../modals/NewCharacter/NewCharacter';
import Character from './Character';
class CharacterSelect extends Component {
	state={};
	componentDidMount(){
		this.props.getItems();
	}
	render() {
		const {items}=this.props.item;
		return (
			<Row>
				<Col xs="12">
					<Row className="mb-5">
						<Col xs="12" className="text-center text-light bg-info">
							<h1>Welcome to the start screen!</h1>
						</Col>
					</Row>
					<Row>
						<Col md={{size:6,offset:3}} className="text-center">
							<ListGroup >
								<ListGroupItem>
									<ListGroupItemHeading>
										{this.props.activeCharacter.activeCharacter.name||"Choose your character"}
									</ListGroupItemHeading>
								</ListGroupItem>
								{items.map(({_id,name,race,level},index)=>(
									<Character key={_id} index={index} name={name} race={race} level={level}/>
								))}
								<ListGroupItem>
									<NewCharacter/>
								</ListGroupItem>
							</ListGroup>
						</Col>
					</Row>
				</Col>
			</Row>
		);
	}
}

CharacterSelect.propTypes={
	getItems:PropTypes.func.isRequired,
	item:PropTypes.object.isRequired,
	characters:PropTypes.object,
	character:PropTypes.object
}
const mapStateToProps =state=>({
	item:state.item,
	activeCharacter:state.activeCharacter
})

export default connect(mapStateToProps,{ getItems })(CharacterSelect);
