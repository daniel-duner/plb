import React,{Component} from 'react';
import { LoremIpsum} from 'react-lorem-ipsum';

import './slideShow.css';
import Slideshow from './Slideshow';
import Post from './Post';
import PostText from './PostText';

//<i class="large bars icon"></i>

class Home extends Component{
    constructor (props){
        super(props);
        this.state = {
            slideshowText: "",
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

        }
    }
    render(){
        return(<div>
            <Slideshow fadeProperties={this.state.fadeProperties} fadeImages={this.state.images} slideshowText={this.state.slideshowText} />
            
        </div>);
    };
}

export default Home;