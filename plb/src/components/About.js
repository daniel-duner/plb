import React,{Component} from 'react';

import '../resources/css/slideShow.css';
import Post from './fragments/Post';

class About extends Component{
    constructor (props){
        super(props);
        this.state = {
            alt: [
                "Trust image",
                "Core Values image",
                "Planning image",
                "Safety image"
            ],
            altSigil: "UC sigil highest rating",
            img_1: require("../resources/img/about/handshake.jpg"),
            img_2: require("../resources/img/about/trust.jpg"),
            img_3: require("../resources/img/about/planing.jpg"),
            img_4: require("../resources/img/about/helmet.jpg"),
        }
    }

    render(){
        return (<div>
            <Post image={this.state.img_1} title={this.props.content.listFactsTitle} list={this.props.content.listFacts} imagePosition="right" sigil={this.props.sigil} alt={this.state.alt[0]} altSigil={this.state.altSigil}/>
            <Post image={this.state.img_2} title={this.props.content.listValuesTitle}  list={this.props.content.listValues} carouselSettings={this.state.carouselSettings} imagePosition="left" alt={this.state.alt[1]}/>
            <Post image={this.state.img_3}  title={this.props.content.listIdeaTitle} list={this.props.content.listIdea} imagePosition="left" alt={this.state.alt[2]}/>
            <Post image={this.state.img_4} text={this.state.textGallerySlussen} title={this.props.content.listSystemTitle}  list={this.props.content.listSystem} imagePosition="right" alt={this.state.alt[3]}/>
        </div>);

    };

}

export default About;