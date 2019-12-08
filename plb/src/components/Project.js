import React,{Component} from 'react';
import { LoremIpsum} from 'react-lorem-ipsum';

import './slideShow.css';
import Slideshow from './Slideshow';
import Post from './Post';
import PostText from './PostText';

//<i class="large bars icon"></i>

class Project extends Component{
    constructor (props){
        super(props);
        this.state = {
            slideshowText: "",
            // require("./img/Vasagatan_1.png"),require("./img/Vasagatan_2.png"),require("./img/Vasagatan_3.png"),
            vasagatanImages:[require("./img/Vasagatan_4.png")],
            vasagatanText: "Vasagatan mellan Tegelbacken och Norra Bantorget byggs om för att möta dagens och framtidens behov. Nya Vasagatan blir en välkomnande,"
            +"tryggare och mer levande stadsgata med människorna i centrum. Projektvolym ca 300 Mkr. Projektledningsbyråns uppdrag är projekt- och projekteringsledning."+
            "Uppdraget påbörjades 2019 och är pågående.",

            westBridgeText: "Västerbron färdigställdes 1935 och består av två broar, bro över Riddarfjärden och bro över Pålsundet.  Projektet omfattar utredning av Västerbrons"+
            " konstruktiva tillstånd samt framtagande av förslag till åtgärder för att säkra framtida funktion. Projektvolym ca 15 Mkr. Projektledningsbyråns uppdrag är projektledning"+
            " och projekteringsledning. Uppdraget påbörjades 2018 och är pågående.",

            vasaBridgeText: "Vasabron färdigställdes 1878 och består av sju stycken bågbroar som sammanbinder Gamla Stan med Norrmalm. Projektet omfattar utredning av Vasabrons "+
            "konstruktiva tillstånd samt framtagande av förslag till åtgärder för att säkra framtida funktion. Projektvolym ca 15 Mkr. Projektledningsbyråns uppdrag är projektledning "+
            "och projekteringsledning. Uppdraget påbörjades 2019 och är pågående.",

            slussenImages:[require("./img/slussen_1.jpg"),require("./img/slussen_2.jpg"),require("./img/slussen_3.jpg")],
            slussenText: "Slussen är efter över 80 år utsliten och byggs därför upp från grunden. Området anpassas för att möta behoven hos dagens och morgondagens stockholmare och"+
            " framtidens Slussen blir en effektiv och trygg knutpunkt för gående, cyklister och kollektivtrafik. "+
            "Projektvolym ca 12 000 Mkr. Projektledningsbyråns uppdrag har varit projektledning av ett av tre delområden i utrednings- projekterings- och genomförandeskedet. Uppdraget påbörjades 2012 och avslutades 2018.",

            
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
            <Post title="Projekt Vasagatan" carouselImages={this.state.vasagatanImages} text={this.state.vasagatanText}  imagePosition="left" imgText="Foto: Stockholm stad"/>
            <Post title="Projekt Västerbron" carouselImages={this.state.vasagatanImages} text={this.state.westBridgeText}  imagePosition="left"/>
            <Post title="Projekt Vasabron" carouselImages={this.state.vasagatanImages} text={this.state.vasaBridgeText}  imagePosition="left"/>
            <Post title="Projekt Slussen" carouselImages={this.state.slussenImages} text={this.state.slussenText}  imagePosition="left" imgText="Foto: Stockholm stad"/>
           
        </div>);
    };
}

export default Project;