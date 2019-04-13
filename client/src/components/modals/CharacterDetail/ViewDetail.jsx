import React, { Component } from 'react';
import {
    Modal,
    ModalBody,
    ModalHeader,
    ModalFooter,
    Button
} from 'reactstrap';
import {connect} from 'react-redux';
import{deactivateModal} from '../../../actions/itemActions';

class ViewDetail extends Component {
    toggle=()=>{
        this.props.deactivateModal();
    }
    render() { 
        return (
            <Modal isOpen={this.props.modal.modal==='view'}>
                <ModalHeader>View</ModalHeader>
                <ModalBody>
                    <div>Hi from the view Modal</div>
                    <Button onClick={this.toggle}>Close</Button>
                </ModalBody>
            </Modal>
        );
    }
}
 
const mapStateToProps = state =>({
    modal:state.modal
});

export default connect(mapStateToProps,{deactivateModal})(ViewDetail);