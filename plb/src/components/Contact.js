import React, { Component } from 'react'
import { LoremIpsum } from 'react-lorem-ipsum'

import ContactCard from './ContactCard'
import PostText from './PostText'
import Slideshow from './Slideshow'
import Post from './Post'


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideshowText: "Våra värderingar",
            carouselImages: [require("./img/consHD_1.jpg"), require("./img/consHD_2.jpg"), require("./img/consHD_3.jpg")],
            textGallerySlussen: LoremIpsum(1),
            images: [require("./img/home_slide_1.jpg"), require("./img/home_slide_2.jpg"), require("./img/home_slide_3.jpg")],
            fadeProperties: {
                duration: 7000,
                transitionDuration: 2000,
                infinite: true,
                indicators: false,
                arrows: false
            },

            // require("./img/avatar.png"),
            personImages: [require("./img/personCard.jpg")],
            personText: ["Hej jag heter Jakob", "Hej jag heter Fredrik"],
            textGallerySlussen: "Detta är en beskrivning om en person som jobbar på företaget. Detta är en beskrivning om en person som jobbar på företaget.Detta är en beskrivning om en person som jobbar på företaget. Detta är en beskrivning om en person som jobbar på företaget. Detta är en beskrivning",
        }
    }
    render() {
        return (<div>
            <Slideshow fadeProperties={this.state.fadeProperties} fadeImages={this.state.images} />
            <PostText title="Våra medarbetare" />
            <ContactCard email="johan.hedenstrom@projektledningsbyran.se" phone="070-744 0850" carouselImages={[require("./img/profile_1.png")]} text={this.state.textGallerySlussen} title="Johan Hedenström" />
            <ContactCard email="fredrik.molin@projektledningsbyran.se" phone="073-432 5539" carouselImages={[require("./img/profile_2.jpg")]} text={this.state.textGallerySlussen} title="Fredrik Molin" />
            <ContactCard email="kim.jangholm@projektledningsbyran.se" phone="073-432 5529" carouselImages={[require("./img/profile_1.png")]}  title="Kim Jangholm" />
            <ContactCard email="Långholmsgatan 30" phone=" 117 33, Stockholm" carouselImages={[require("./img/profile_2.jpg")]} text={this.state.textGallerySlussen} title="Kontor" />
        </div>);

    };
}

export default Contact;