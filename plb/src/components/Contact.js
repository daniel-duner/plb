import React, { Component } from 'react'

import ContactCard from './fragments/ContactCard'
import GoogleMaps from './fragments/GoogleMaps';
import PostText from './fragments/PostText'


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (<div>
            <ContactCard email="johan.hedenstrom@projektledningsbyran.se" phone="070-744 0850" image={require("../resources/img/contact/johan.jpg")} title="Johan Hedenström" />
            <ContactCard email="fredrik.molin@projektledningsbyran.se" phone="073-432 5539" image={require("../resources/img/contact/fredrik.jpg")} title="Fredrik Molin" />
            <ContactCard email="kim.jangholm@projektledningsbyran.se" phone="073-432 5529" image={require("../resources/img/contact/kim.jpg")} title="Kim Jangholm" />
            <GoogleMaps title={this.props.content.mapsTitle} />
        </div>);

    };
}

export default Contact;