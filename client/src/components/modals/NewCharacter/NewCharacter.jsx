import React, { Component } from 'react';
import {
    Modal,
    ModalBody,
    ModalHeader,
    ModalFooter,
    Button,
    Input,
    Form,
    FormGroup
} from 'reactstrap';
import {connect} from 'react-redux';
import {addItem,addCharacter} from '../../../actions/itemActions';
import Character from '../../characterSheet/Character';

class NewCharacter extends Component {
    constructor(props){
        super(props);
        this.state={
            modal:false,
            name:''
        };
    }
    toggle=()=>{
        this.setState(prev=>({
            modal:!prev.modal
        }));
    }
    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    onSubmit=(e)=>{
        e.preventDefault();
    const newItem = {
        name:this.state.name,
        sheet:new Character(this.state.name)
    }
    // Adds character with addCharacter command
    this.props.addCharacter(newItem);
    // Close Modal
    this.toggle();
    }

    render() { 
        return (
            <div>
            <Button className="bg-success d-block w-100" onClick={this.toggle}>
                Start a new adventure
            </Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle}>
                <ModalHeader className="text-center">
                    Enter your new character's name
                </ModalHeader>
                <ModalBody className="w-100">
                    <Form onSubmit={this.onSubmit}>
                        <FormGroup>
                            <Input 
                                className="mb-5"
                                xs="10"
                                type="text"
                                name="name"
                                id="item"
                                placeholder="Character Name"
                                onChange={this.onChange}/>
                            <Button
                                className="w-50"
                                type="submit"
                                color="primary">Submit</Button>
                                {/* <Button className="w-50" type="submit" color="danger" onClick={this.toggle}>Cancel</Button> */}
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>Adding campaign support later</ModalFooter>
            </Modal>
            </div>

        );
    }
}
 
const mapStateToProps = state =>({
    item:state.item});

export default connect(mapStateToProps,{addItem,addCharacter})(NewCharacter);