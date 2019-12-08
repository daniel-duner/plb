import React,{Component} from 'react';
import { LoremIpsum} from 'react-lorem-ipsum';

import './slideShow.css';
import Slideshow from './Slideshow';
import Post from './Post';

class About extends Component{
    constructor (props){
        super(props);
        this.state = {
            //slideshowText: "Våra värderingar",
            carouselImages:[require("./img/consHD_1.jpg"),require("./img/consHD_2.jpg"),require("./img/consHD_3.jpg")],
            textGallerySlussen: LoremIpsum(1),

            listFacts: ["Projektledning, projekteringsledning och byggledning av mark- och infrastrukturprojekt",
            "Verksamhet sedan 2012",
            "Teoretisk och praktisk projektledningskompetens hos samtliga medarbetare",
            "Företag med stark likviditet. UC riskklass 1"],

            listValues: ["Lösningsinriktat, kundfokuserat och projektfokuserat tjänsteföretag",  
            "Kunden och projektets mål värnas alltid", 
            "Människorna i projekt är individer som skapar team.  Professionella, nyfikna och lärande",
            "Tar alltid ansvar för utfört arbete"],

            listIdea: ["Starkt varumärke i branschen med kvalificerade resurser för ledning av mark- och infrastrukturprojekt",
                "Kundfokuserat tjänsteföretag som arbetar för långsiktiga affärsrelationer"],

            listSystem: ["Långsiktiga affärsrelationer kräver kännedom och kunskap hur rätt kvalitet uppnås. Rätt kvalitet uppnås genom utförande av rätt arbetsuppgifter. Vårt verksamhetssystem hjälper oss i arbetet med att göra rätt arbetsuppgifter och att få långsiktiga affärsrelationer.",
                "Vårt företagsinterna verksamhetssystem är uppbyggt för att uppfylla krav i SS-EN ISO 9001:2015, 14001:2015 samt 45001:2018. I verksamhetssystemet ingår fungerande stödprocesser upprättade med stöd utifrån SS-ISO 21500:2012 för uppdragsledning/ projektledning/ projekteringsledning/ byggledning."],    

            images: [require("./img/home_slide_1.jpg"),require("./img/home_slide_2.jpg"),require("./img/home_slide_3.jpg")],
            fadeProperties: {
                duration: 7000,
                transitionDuration: 2000,
                infinite: true,
                indicators: false,
                arrows: false
            },
            img_1: [require("./img/about/digital-marketing-agency.jpg")],
            carouselSettings: "indicators=false"

        }
    }

    render(){
        return (<div>
            <Slideshow fadeProperties={this.state.fadeProperties} fadeImages={this.state.images} slideshowText={this.state.slideshowText}/>
            <Post carouselImages={this.state.carouselImages} title="Kort fakta" list={this.state.listFacts} imagePosition="right" sigill="true"/>
            <Post carouselImages={this.state.img_1} title="Värderingar" imagePosition="left" list={this.state.listValues} carouselSettings={this.state.carouselSettings}/>
            <Post carouselImages={this.state.carouselImages} imagePosition="left" title="Affärsidé" list={this.state.listIdea}/>
            <Post carouselImages={this.state.carouselImages} text={this.state.textGallerySlussen} title="Verksamhetssystem KMA" imagePosition="right" list={this.state.listSystem} />
        </div>);

    };

}

export default About;