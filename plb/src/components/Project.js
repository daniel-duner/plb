import React,{Component} from 'react';

import '../resources/css/slideShow.css';
import Post from './fragments/Post';

//<i class="large bars icon"></i>

class Project extends Component{
    constructor (props){
        super(props);
        this.state = {
            imgVasagatan: require("../resources/img/project/vasagatan.jpg"),
            imgSlussen: require("../resources/img/project/slussen.jpg"),
            imgVasabron: require("../resources/img/project/vasabron.jpg"),
            imgVasterbron: require("../resources/img/project/vasterbron.jpg"),
        }
    }
    render(){
        return(<div>
            <Post title={this.props.content.vasagatanTitle} image={this.state.imgVasagatan} text={this.props.content.vasagatanText}  imagePosition="left" imgText={this.props.content.imgText[0]}/>
            <Post title={this.props.content.westBridgeTitle} image={this.state.imgVasterbron} text={this.props.content.westBridgeText}  imagePosition="right"/>
            <Post title={this.props.content.vasaBridgeTitle} image={this.state.imgVasabron} text={this.props.content.vasaBridgeText}  imagePosition="left"/>
            <Post title={this.props.content.slussenTitle} image={this.state.imgSlussen} text={this.props.content.slussenText}  imagePosition="left" imgText={this.props.content.imgText[1]}/>
        </div>);
    };
}

export default Project;