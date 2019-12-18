import React, { Component } from 'react'
import MobilePost from './fragments/MobilePost';

import GoogleMaps from '../fragments/GoogleMaps';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (<div>
            <MobilePost title={this.props.content.mainTitle} />
            <MobilePost image={[require("../../resources/img/contact/johan.jpg")]} state="image"/>
            <MobilePost email="johan.hedenstrom@projektledningsbyran.se" phone="070-744 0850" title="Johan Hedenström" />
            <MobilePost image={[require("../../resources/img/contact/fredrik.jpg")]} state="image"/>
            <MobilePost email="fredrik.molin@projektledningsbyran.se" phone="073-432 5539" image={[require("../../resources/img/contact/fredrik.jpg")]} title="Fredrik Molin" />
            <MobilePost image={[require("../../resources/img/contact/kim.jpg")]} state="image"/>
            <MobilePost email="kim.jangholm@projektledningsbyran.se" phone="073-432 5529" image={[require("../../resources/img/contact/kim.jpg")]} title="Kim Jangholm" />
            <GoogleMaps title={this.props.content.mapsTitle} mobile={true} />
        </div>);

    };
}

export default Contact;