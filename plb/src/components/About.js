import React,{Component} from 'react';

import '../resources/css/slideShow.css';
import Post from './fragments/Post';

class About extends Component{
    constructor (props){
        super(props);
        this.state = {
            img_1: require("../resources/img/about/handshake.jpg"),
            img_2: require("../resources/img/about/trust.jpg"),
            img_3: require("../resources/img/about/planing.jpg"),
            img_4: require("../resources/img/about/helmet.jpg"),
        }
    }

    render(){
        return (<div>
            <Post image={this.state.img_1} title={this.props.content.listFactsTitle} list={this.props.content.listFacts} imagePosition="right" sigil={this.props.sigil} />
            <Post image={this.state.img_2} title={this.props.content.listValuesTitle}  list={this.props.content.listValues} carouselSettings={this.state.carouselSettings} imagePosition="left"/>
            <Post image={this.state.img_3}  title={this.props.content.listIdeaTitle} list={this.props.content.listIdea} imagePosition="left"/>
            <Post image={this.state.img_4} text={this.state.textGallerySlussen} title={this.props.content.listSystemTitle}  list={this.props.content.listSystem} imagePosition="right" />
        </div>);

    };

}

export default About;