import React,{Component} from 'react';
import { LoremIpsum} from 'react-lorem-ipsum';

import ContactCard from './ContactCard';
import PostText from './PostText';


class Contact extends Component{
    constructor (props){
        super(props);
        this.state = {
            personImages:[require("./img/avatar.png"),require("./img/avatar.png")],
            personText:["Hej jag heter Jakob","Hej jag heter Fredrik"],
            textGallerySlussen: LoremIpsum(1),
        }
    }
    render(){
        return (<div>
            <PostText title="Kontaktpersoner"/>
            <ContactCard personImages={this.state.personImages} personText={this.state.personText} />
        </div>);

    };
}

export default Contact;