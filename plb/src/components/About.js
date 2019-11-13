import React,{Component} from 'react';
import { LoremIpsum} from 'react-lorem-ipsum';

import './slideShow.css';
import Slideshow from './Slideshow';
import Post from './Post';

class About extends Component{
    constructor (props){
        super(props);
        this.state = {
            slideshowText: "Våra värderingar",
            carouselImages:[require("./img/consHD_1.jpg"),require("./img/consHD_2.jpg"),require("./img/consHD_3.jpg")],
            textGallerySlussen: LoremIpsum(1),
            images: [require("./img/home_slide_1.jpg"),require("./img/home_slide_2.jpg"),require("./img/home_slide_3.jpg")],
            fadeProperties: {
                duration: 7000,
                transitionDuration: 2000,
                infinite: true,
                indicators: false,
                arrows: false
            },
            img_1: [require("./img/about/digital-marketing-agency.jpg")]

        }
    }

    render(){
        return (<div>
            <Slideshow fadeProperties={this.state.fadeProperties} fadeImages={this.state.images} slideshowText={this.state.slideshowText}/>
            <Post carouselImages={this.state.carouselImages} text={this.state.textGallerySlussen} title="Värderingar" />
            <Post carouselImages={this.state.img_1} text={
            ""
            } title="Personliga" imagePosition="left"/>
            <Post carouselImages={this.state.carouselImages} text={this.state.textGallerySlussen} title="Utvecklande"/>
            <Post carouselImages={this.state.carouselImages} text={this.state.textGallerySlussen} title="Tillsammans" />
            <Post carouselImages={this.state.carouselImages} text={this.state.textGallerySlussen} title="Ärliga" />
        </div>);

    };

}

export default About;