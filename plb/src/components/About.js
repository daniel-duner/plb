import React,{Component} from 'react';

import './slideShow.css';
import Post from './Post';

class About extends Component{
    constructor (props){
        super(props);
        this.state = {
            carouselImages:[require("./img/consHD_1.jpg"),require("./img/consHD_2.jpg"),require("./img/consHD_3.jpg")],
            img_1: [require("./img/about/digital-marketing-agency.jpg")],
        }
    }

    render(){
        return (<div>
            <Post carouselImages={this.state.carouselImages} title={this.props.content.listFactsTitle} list={this.props.content.listFacts} imagePosition="right" sigil={this.props.sigil} />
            <Post carouselImages={this.state.img_1} title={this.props.content.listValuesTitle}  list={this.props.content.listValues} carouselSettings={this.state.carouselSettings} imagePosition="left"/>
            <Post carouselImages={this.state.carouselImages}  title={this.props.content.listIdeaTitle} list={this.props.content.listIdea} imagePosition="left"/>
            <Post carouselImages={this.state.carouselImages} text={this.state.textGallerySlussen} title={this.props.content.listSystemTitle}  list={this.props.content.listSystem} imagePosition="right"/>
        </div>);

    };

}

export default About;