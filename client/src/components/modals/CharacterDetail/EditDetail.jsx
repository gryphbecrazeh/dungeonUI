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
import{deactivateModal,updateCharacter} from '../../../actions/itemActions';

class EditDetail extends Component {
    constructor(props){
        super(props);
        this.state={
            name:''
        };
    }
    toggle=()=>{
        this.props.deactivateModal();
    }
    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    onSubmit=(e)=>{
        e.preventDefault();
        this.props.updateCharacter(this.props.activeCharacter.activeCharacter,this.state);
        this.props.updateCharacter(this.props.activeCharacter.activeCharacter.sheet,this.state);
        console.log(this.props.activeCharacter.activeCharacter);
        // Close Modal
        this.toggle();
    }

    render() { 
        return (
            <Modal isOpen={this.props.modal.modal==='edit'}>
                <ModalHeader>Edit</ModalHeader>
                <ModalBody>
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
                        </FormGroup>
                    </Form>
                    <Button onClick={this.toggle}>Close without changes</Button>
                </ModalBody>
            </Modal>
        );
    }
}
 
const mapStateToProps = state =>({
    modal:state.modal,
    activeCharacter:state.activeCharacter
});

export default connect(mapStateToProps,{deactivateModal,updateCharacter})(EditDetail);