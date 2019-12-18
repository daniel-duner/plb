import React,{Component} from 'react';
import MobilePost from './fragments/MobilePost';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

class About extends Component{
    constructor (props){
        super(props);
        this.state = {
            images:[require("../../resources/img/consHD_1.jpg"),require("../../resources/img/consHD_2.jpg"),require("../../resources/img/consHD_3.jpg")],
            img_1: [require("../../resources/img/about/digital-marketing-agency.jpg")],
        }
    }

    render(){
        return (<div>
            <MobilePost image={this.state.images[0]} state="image" />
            <MobilePost title={this.props.content.listFactsTitle} list={this.props.content.listFacts}  sigil={this.props.sigil} />
            <MobilePost image={this.state.img_1} state="image" />
            <MobilePost title={this.props.content.listValuesTitle}  list={this.props.content.listValues}/>
            <MobilePost image={this.state.images[1]} state="image" />
            <MobilePost title={this.props.content.listIdeaTitle} list={this.props.content.listIdea}/>
            <MobilePost image={this.state.images[2]} state="image" />
            <MobilePost text={this.state.textGallerySlussen} title={this.props.content.listSystemTitle}  list={this.props.content.listSystem}/>
        </div>);

    };

}

export default About;