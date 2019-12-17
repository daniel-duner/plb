import React, { Component } from 'react'
import { LoremIpsum } from 'react-lorem-ipsum'

import ContactCard from './ContactCard'
import GoogleMaps from './GoogleMaps';
import PostText from './PostText'
import Slideshow from './Slideshow'
import Post from './Post'


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeProperties: {
                duration: 7000,
                transitionDuration: 2000,
                infinite: true,
                indicators: false,
                arrows: false
            },

        }
    }
    render() {
        return (<div>
            <PostText title={this.props.content.mainTitle} />
            <ContactCard email="johan.hedenstrom@projektledningsbyran.se" phone="070-744 0850" carouselImages={[require("./img/contact/johan.jpg")]} title="Johan Hedenström" />
            <ContactCard email="fredrik.molin@projektledningsbyran.se" phone="073-432 5539" carouselImages={[require("./img/contact/fredrik.jpg")]} title="Fredrik Molin" />
            <ContactCard email="kim.jangholm@projektledningsbyran.se" phone="073-432 5529" carouselImages={[require("./img/contact/kim.jpg")]} title="Kim Jangholm" />
            <GoogleMaps title={this.props.content.mapsTitle} />
        </div>);

    };
}

export default Contact;