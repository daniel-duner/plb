import React from 'react';

import Container from 'react-bootstrap/Container'

const Card = (props) => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Image src={this.props.image}></Image>
                </Col>
                <Col>
                    <Row>
                    <h2>{this.props.name}</h2>
                    <p>{this.props.description}</p>
                    </Row>
                    <Row>
                    <a href={"mailto:"+this.props.email}>{this.props.email}</a>
                    <a href={"tel:"+this.props.phone}>{this.props.phone}</a>
                    </Row>
                    
                </Col>
            </Row>
        </Container>

    );
}

export default Card;

