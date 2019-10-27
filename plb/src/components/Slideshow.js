import React,{Component} from 'react';
import { Fade } from 'react-slideshow-image';
import Image from 'react-bootstrap/Image';
 
class Slideshow extends Component{

  render(){
  return (
    <div className="slide-container">
      <Fade {...this.props.fadeProperties}>
        <div className="each-fade">
          <div className="image-container">
            <Image src={require("./img/home_slide_1_scaled.jpg")} fluid/>
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <Image src={require("./img/home_slide_2_scaled.jpg")} fluid/>
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <Image src={require("./img/home_slide_3_scaled.jpg")} fluid/>
          </div>
        </div>
      </Fade>
    </div>
  )
  }
}

export default Slideshow;