import React,{Component} from 'react';
import MobilePost from './fragments/MobilePost';

//<i class="large bars icon"></i>

class Project extends Component{
    constructor (props){
        super(props);
        this.state = {
            vasagatanImages:[require("../../resources/img/project/Vasagatan_4.png")],
            slussenImages:[require("../../resources/img/project/slussen_1.jpg"),require("../../resources/img/project/slussen_2.jpg"),require("../../resources/img/project/slussen_3.jpg")],
        }
    }
    render(){
        return(<div>
            <MobilePost images={this.state.vasagatanImages[0]}  state="image"/>
            <MobilePost title={this.props.content.vasagatanTitle} text={this.props.content.vasagatanText} imgText={this.props.content.imgText} state="text"/>
            <MobilePost image={this.state.vasagatanImages[0]} state="image"/>
            <MobilePost title={this.props.content.westBridgeTitle} text={this.props.content.westBridgeText} />
            <MobilePost image={this.state.vasagatanImages[0]} state="image"/>
            <MobilePost title={this.props.content.vasaBridgeTitle} text={this.props.content.vasaBridgeText}  />
           <MobilePost image={this.state.slussenImages[0]} state="image"/>
            <MobilePost title={this.props.content.slussenTitle} text={this.props.content.slussenText} imgText={this.props.content.imgText}/>
        </div>);
    };
}

export default Project;