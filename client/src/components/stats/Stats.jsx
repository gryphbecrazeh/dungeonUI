import React, { Component } from 'react';
import {
    Row,
    Col,
    Button,
    Card,
    CardBody,
    CardSubtitle,
    CardText,
    CardTitle
} from 'reactstrap';

class Stats extends Component {
    state = {  }
    render() { 
        const {str,dex,con,int,wis,cha} =this.props.stats;
        return (
            <Row block={true} className="text-center mt-2">
                <Col xs="2">
                    <Card>
                        <CardBody>
                            <CardTitle>Str</CardTitle>
                            <CardSubtitle>{str.val}</CardSubtitle>
                            <CardText>+{str.bonus}</CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="2">
                    <Card>
                        <CardBody>
                            <CardTitle>Dex</CardTitle>
                            <CardSubtitle>{dex.val}</CardSubtitle>
                            <CardText>+{dex.bonus}</CardText>
                        </CardBody>
                    </Card>
                    </Col>
                <Col xs="2">

                    <Card>
                        <CardBody>
                            <CardTitle>Con</CardTitle>
                            <CardSubtitle>{con.val}</CardSubtitle>
                            <CardText>+{con.bonus}</CardText>
                        </CardBody>
                    </Card>
                    </Col>
                <Col xs="2">

                    <Card>
                        <CardBody>
                            <CardTitle>Int</CardTitle>
                            <CardSubtitle>{int.val}</CardSubtitle>
                            <CardText>+{int.bonus}</CardText>
                        </CardBody>
                    </Card>
                    </Col>
                <Col xs="2">

                    <Card>
                        <CardBody>
                            <CardTitle>Wis</CardTitle>
                            <CardSubtitle>{wis.val}</CardSubtitle>
                            <CardText>+{wis.bonus}</CardText>
                        </CardBody>
                    </Card>
                    </Col>
                <Col xs="2">

                    <Card>
                        <CardBody>
                            <CardTitle>Cha</CardTitle>
                            <CardSubtitle>{cha.val}</CardSubtitle>
                            <CardText>+{cha.bonus}</CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        );
    }}
 
export default Stats;