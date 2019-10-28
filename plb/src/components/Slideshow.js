import React,{Component} from 'react';
import { Fade } from 'react-slideshow-image';
import Image from 'react-bootstrap/Image';
 
class Slideshow extends Component{
  render(){
  return (
    <div className="slide-container">
      <Fade {...this.props.fadeProperties}>
        {this.props.fadeImages.map((picture) => 
          <div className="each-fade">
            <div className="image-container">
              <Image src={picture.toString()} fluid/>
            </div>
          </div>
        )}
      </Fade>
    </div>
  )
  }
}

export default Slideshow;