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
<<<<<<< HEAD
            <Image src={this.props.fadeImages[0]} fluid/>
=======
            <Image src={require("./img/home_slide_1_scaled.jpg")} fluid/>
>>>>>>> 03d4d0fc15ef9458943112746e2d3c5a957d8829
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
<<<<<<< HEAD
            <Image src={this.props.fadeImages[1]} fluid/>
=======
            <Image src={require("./img/home_slide_2_scaled.jpg")} fluid/>
>>>>>>> 03d4d0fc15ef9458943112746e2d3c5a957d8829
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
<<<<<<< HEAD
            <Image src={this.props.fadeImages[2]} fluid/>
=======
            <Image src={require("./img/home_slide_3_scaled.jpg")} fluid/>
>>>>>>> 03d4d0fc15ef9458943112746e2d3c5a957d8829
          </div>
        </div>
      </Fade>
    </div>
  )
  }
}

export default Slideshow;