import React,{Component} from 'react';

import '../resources/css/slideShow.css';
import Post from './fragments/Post';

//<i class="large bars icon"></i>

class Project extends Component{
    constructor (props){
        super(props);
        this.state = {
            vasagatanImages:[require("../resources/img/project/Vasagatan_4.png")],
            slussenImages:[require("../resources/img/project/slussen_1.jpg"),require("../resources/img/project/slussen_2.jpg"),require("../resources/img/project/slussen_3.jpg")],
        }
    }
    render(){
        return(<div>
            <Post title={this.props.content.vasagatanTitle} carouselImages={this.state.vasagatanImages} text={this.props.content.vasagatanText}  imagePosition="left" imgText={this.props.content.imgText}/>
            <Post title={this.props.content.westBridgeTitle} carouselImages={this.state.vasagatanImages} text={this.props.content.westBridgeText}  imagePosition="left"/>
            <Post title={this.props.content.vasaBridgeTitle} carouselImages={this.state.vasagatanImages} text={this.props.content.vasaBridgeText}  imagePosition="left"/>
            <Post title={this.props.content.slussenTitle} carouselImages={this.state.slussenImages} text={this.props.content.slussenText}  imagePosition="left" imgText={this.props.content.imgText}/>
        </div>);
    };
}

export default Project;