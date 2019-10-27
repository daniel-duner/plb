import React,{Component} from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { LoremIpsum} from 'react-lorem-ipsum';

import './slideShow.css';
import Slideshow from './Slideshow';
import Post from './Post';

//<i class="large bars icon"></i>

class Home extends Component{
    constructor (props){
        super(props);
        this.state = {
            imageState: true,
            fadeInCounter: 0,
            fadeOutCounter: 1,
            images: [require("./img/home_slide_1.jpg"),require("./img/home_slide_2_scaled.jpg"),require("./img/home_slide_3_scaled.jpg")],
            fadeProperties: {
                duration: 7000,
                transitionDuration: 2000,
                infinite: true,
                indicators: false,
                arrows: false
            },

        }
    }

    componentDidMount(){

        setInterval(() =>{
            this.renderSlideShow(this.state.imageState);
        }, 3500);
        
    }

    


    renderSlideShow = (imageState) => {
        if(this.state.imageState){
            this.setState({fadeInCounter: this.getNextImage(this.state.fadeInCounter)})
            this.setState({imageState: false});
        } else {
            this.setState({fadeOutCounter: this.getNextImage(this.state.fadeInCounter)})
            this.setState({imageState: true});
        }       
    }

    getNextImage = (number) => {
        switch(number){
            case 0:
                return 2;
            case 1:
                return 0;
            case 2:
                return 1;
        }
    }
    
    render(){
        return(<div>
            <Slideshow fadeProperties={this.state.fadeProperties} fadeImages={this.state.images} />
            <Post/>
        </div>);
    };
}

export default Home;