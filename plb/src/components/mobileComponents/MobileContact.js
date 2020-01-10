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
            <MobilePost image={[require("../../resources/img/contact/johan.jpg")]} state="image" alt="Johan Hedenström"/>
            <MobilePost email="johan.hedenstrom@projektledningsbyran.se" phone="070-744 0850" title="Johan Hedenström" contact={true}/>
            <MobilePost image={[require("../../resources/img/contact/fredrik.jpg")]} state="image" alt="Fredrik Molin"/>
            <MobilePost email="fredrik.molin@projektledningsbyran.se" phone="073-432 5539" contact={true} title="Fredrik Molin" />
            <MobilePost image={[require("../../resources/img/contact/kim.jpg")]} state="image" alt="Kim Jangholm"/>
            <MobilePost email="kim.jangholm@projektledningsbyran.se" phone="073-432 5529" contact={true} title="Kim Jangholm" />
            <GoogleMaps title={this.props.content.mapsTitle} mobile={true} contact={true} />
        </div>);

    };
}

export default Contact;