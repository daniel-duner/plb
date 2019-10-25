import React,{Component} from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { LoremIpsum} from 'react-lorem-ipsum';

import './slideShow.css';
import Slideshow from './Slideshow';

//<i class="large bars icon"></i>

class Home extends Component{
    constructor (props){
        super(props);
        this.state = {
            imageState: true,
            fadeInCounter: 0,
            fadeOutCounter: 1,
            images: ["./img/home_slide_1.jpg","./img/home_slide_2.jpg","./img/home_slide_3.jpg"],
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

    render(){
        return(<div>
            <Slideshow fadeProperties={this.state.fadeProperties} fadeImages={this.state.images} />
            <Jumbotron fluid>
                <LoremIpsum/>
            </Jumbotron>
        </div>);
    };


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
}

export default Home;