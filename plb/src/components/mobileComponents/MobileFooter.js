import React, { Component } from "react";
import { Nav, Navbar, NavItem, Container, Row, Col } from "react-bootstrap";
import '../../resources/css/font.css'
import '../../resources/css/footer.css';


class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companyInfo: "Projektledningsbyrån J.Hedenström AB \nOrg.nr: 556886-4622 \nLångholmsgatan 30 \n117 33 Stockholm"
        }
    }
    render() {

        return (
            <Navbar className="dark-background">
                <Nav className="mr-auto">
                    <Navbar.Text className="footer align-text">

                        <div>
                            <Container>
                                <Row>
                                    <Col>
                                    <p className="p4">Projektledningsbyrån J.Hedenström AB</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p className="p1" >Org.nr: 556886-4622</p>
                                        <p className="p1" >Långholmsgatan 30</p>
                                        <p className="p1" >117 33 Stockholm</p>
                                    </Col>

                                    <Col>
                                        <a href="https://www.uc.se/risksigill2?showorg=556886-4622&language=swe"
                                            title="Sigillet är utfärdat av UC AB. Klicka på bilden för information om UC:s Riskklasser.">
                                            <img src="https://www.uc.se/ucsigill2/sigill?org=556886-4622&language=swe&product=sma&fontcolor=b" />
                                        </a>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p className="p1">{this.props.content.info[1]}</p>
                                        <p className="p1">+46 70 744 08 50</p>
                                        <p className="p1"><a className="footer-links" href="mailto:johan.hedenstrom@projektledningsbyran.se">Mail</a></p>
                                        <p className="p1">
                                            <a className="footer-links"
                                                href="https://www.google.com/maps/place/L%C3%A5ngholmsgatan+30,+117+33+Stockholm/@59.316316,18.0308374,17z/data=!3m1!4b1!4m5!3m4!1s0x465f77c5ab9f6c5d:0x731140427f29efce!8m2!3d59.3163133!4d18.0330262">
                                                {this.props.content.info[2]}
                                            </a>
                                        </p>
                                    </Col>
                                </Row>
                            </Container>


                        </div>
                        <br></br>
                        <p className="p1"> </p>

                        {/* <p className="p4">{this.props.content.info[0]}</p> */}

                    </Navbar.Text>



                </Nav>

            </Navbar>
        )
    }
}

export default Footer;