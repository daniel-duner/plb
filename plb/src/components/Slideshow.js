import React,{Component} from 'react';
import { Fade } from 'react-slideshow-image';
import Image from 'react-bootstrap/Image';
import { isTSNamespaceExportDeclaration } from '@babel/types';
 
class Slideshow extends Component{
//   renderImages(){
//     var i;
//     var txt="";
//     for (i = 0; i < this.props.fadeImages.length; i++) {
//       txt += "<div className='each-fade'>\n";
//         txt += "<div className='image-container'>\n";
//           txt += "<Image src=" + this.props.fadeImages[i] + " fluid/>\n";
//         txt += "</div>\n";
//       txt += "</div>\n";
//     }
    
//       return txt;
      
//   }
  // renderImages(fadeImage){
    
  //     return(
  //       <div className="each-fade">
  //         <div className="image-container">
  //           <Image src={fadeImage} fluid/>
  //         </div>
  //       </div>
  //     );
      
  // }
  render(){
  return (
    <div className="slide-container">
      <Fade {...this.props.fadeProperties}>
        {/* {for(var i=0; i < this.props.fadeImages.length; i++){
        this.renderImages(this.props.fadeImages[i])
        }} */}
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