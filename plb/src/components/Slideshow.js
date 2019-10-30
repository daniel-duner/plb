import React,{Component} from 'react';
import { Fade } from 'react-slideshow-image';
import Image from 'react-bootstrap/Image';
import './font.css';
import './slideShow.css';
 
class Slideshow extends Component{
  render(){
    var textStyle = {
      position: 'absolute', 
      top: '25%', 
      left: '18%'
    };
  return (
    <div className="slide-container">
      <Fade {...this.props.fadeProperties}>
        {this.props.fadeImages.map((picture) => 
          <div className="each-fade">
            <div className="image-container" >
              <Image className="add-text" responsive src={picture.toString()} fluid></Image>
              <h1 style={textStyle} className="text-image">FÖRETAGETS VÄRDERING</h1>
            </div>
          </div>
        )}
      </Fade>
    </div>
  )
  }
}

export default Slideshow;