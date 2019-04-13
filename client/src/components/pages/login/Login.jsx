import React, { Component } from 'react';
import {Row,Col,Button} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
class Login extends Component {
    state = {  }
    onLogin(){
        console.log("clicked");
        this.props.changePage("home");
    }
    render() { 
        return (
            <Row className="h-100">
                <Col xs={{size:6, offset:3}}className="my-auto h-100 align-items center">
                    <Button onClick={this.onLogin.bind(this)} className="bg-success text-center" block={true} >
                        <FontAwesomeIcon size="3x" icon={["fab","google"]}/>
                        <h2>Login with Google</h2>
                    </Button>
                </Col>
            </Row>
        );
    }
}
 
export default Login;