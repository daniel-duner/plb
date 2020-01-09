import React,{Component} from 'react';
import MobilePost from './fragments/MobilePost';

//<i class="large bars icon"></i>

class Project extends Component{
    constructor (props){
        super(props);
        this.state = {
            imgVasagatan: require("../../resources/img/project/mobileVasagatan.jpg"),
            imgSlussen: require("../../resources/img/project/mobileSlussen.jpg"),
            imgVasabron: require("../../resources/img/project/mobileVasabron.jpg"),
            imgVasterbron: require("../../resources/img/project/mobileVasterbron.jpg"),
        }
    }
    render(){
        return(<div>
            <MobilePost image={this.state.imgVasagatan} state="image" imgText={this.props.content.imgText}/>
            <MobilePost title={this.props.content.vasagatanTitle} text={this.props.content.vasagatanText}  state="text"/>
            <MobilePost image={this.state.imgVasterbron} state="image"/>
            <MobilePost title={this.props.content.westBridgeTitle} text={this.props.content.westBridgeText} />
            <MobilePost image={this.state.imgVasabron} state="image"/>
            <MobilePost title={this.props.content.vasaBridgeTitle} text={this.props.content.vasaBridgeText}  />
           <MobilePost image={this.state.imgSlussen} state="image" imgText={this.props.content.imgText}/>
            <MobilePost title={this.props.content.slussenTitle} text={this.props.content.slussenText} />
        </div>);
    };
}

export default Project;