import React,{Component} from 'react';
import MobilePost from './fragments/MobilePost';

//<i class="large bars icon"></i>

class Project extends Component{
    constructor (props){
        super(props);
        this.state = {
            alt: [
                "Project image Vasagatan",
                "Project image Vasterbron",
                "Project image Vasabron",
                "Project image Slussen"
            ],
            imgVasagatan: require("../../resources/img/project/mobileVasagatan.WebP"),
            imgSlussen: require("../../resources/img/project/mobileSlussen.WebP"),
            imgVasabron: require("../../resources/img/project/mobileVasabron.WebP"),
            imgVasterbron: require("../../resources/img/project/mobileVasterbron.WebP"),
        }
    }
    render(){
        return(<div>
            <MobilePost image={this.state.imgVasagatan} state="image" imgText={this.props.content.imgText[0]} alt={this.state.alt[0]}/>
            <MobilePost title={this.props.content.vasagatanTitle} text={this.props.content.vasagatanText}  state="text"/>
            <MobilePost image={this.state.imgVasterbron} state="image" alt={this.state.alt[1]}/>
            <MobilePost title={this.props.content.westBridgeTitle} text={this.props.content.westBridgeText} />
            <MobilePost image={this.state.imgVasabron} state="image" alt={this.state.alt[2]}/>
            <MobilePost title={this.props.content.vasaBridgeTitle} text={this.props.content.vasaBridgeText}  />
           <MobilePost image={this.state.imgSlussen} state="image" imgText={this.props.content.imgText[1]} alt={this.state.alt[3]}/>
            <MobilePost title={this.props.content.slussenTitle} text={this.props.content.slussenText} />
        </div>);
    };
}

export default Project;