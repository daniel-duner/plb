import React,{Component} from 'react'
import { LoremIpsum} from 'react-lorem-ipsum'

import ContactCard from './ContactCard'
import PostText from './PostText'
import Post from './Post'


class Contact extends Component{
    constructor (props){
        super(props);
        this.state = {
            // require("./img/avatar.png"),
            personImages:[require("./img/personCard.jpg")],
            personText:["Hej jag heter Jakob","Hej jag heter Fredrik"],
            textGallerySlussen: "Detta är en beskrivning om en person som jobbar på företaget. Detta är en beskrivning om en person som jobbar på företaget.Detta är en beskrivning om en person som jobbar på företaget. Detta är en beskrivning om en person som jobbar på företaget. Detta är en beskrivning",
        }
    }
    render(){
        return (<div>
            <PostText title="Våra medarbetare"/>
            <ContactCard email="molin.jakob@gmail.com" phone="0724278994" carouselImages={this.state.personImages} text={this.state.textGallerySlussen} title="Fredrik Molin"/>
            <ContactCard email="molin.jakob@gmail.com" phone="0724278994" carouselImages={this.state.personImages} text={this.state.textGallerySlussen} title="Fredrik Molin"/>
            <ContactCard email="molin.jakob@gmail.com" phone="0724278994" carouselImages={this.state.personImages} text={this.state.textGallerySlussen} title="Fredrik Molin"/>
        </div>);

    };
}

export default Contact;