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
            <Image src={this.props.fadeImages[0]} fluid/>
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <Image src={this.props.fadeImages[1]} fluid/>
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <Image src={this.props.fadeImages[2]} fluid/>
          </div>
        </div>
      </Fade>
    </div>
  )
  }
}

export default Slideshow;