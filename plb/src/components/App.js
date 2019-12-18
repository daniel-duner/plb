import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Media from 'react-media';


import '../resources/css/slideShow.css';

import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import Header from './Header.js';
import Footer from './Footer.js'
import Project from './Project.js';
import Slideshow from './fragments/Slideshow';
import MobileHeader from './mobileComponents/MobileHeader';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language: props.cookie.get('language') || 'swe',
            fadeProperties: {
                duration: 7000,
                transitionDuration: 2000,
                infinite: true,
                indicators: false,
                arrows: false
            },
            images: [
                require("../resources/img/homePhotos/2.jpg"),
                require("../resources/img/homePhotos/4.jpg"),
                require("../resources/img/homePhotos/5.jpg")
            ],
            swe: {
                sigil: {
                    title: "Sigillet är utfärdat av UC AB. Klicka på bilden för information om UC:s Riskklasser.",
                    src: "https://www.uc.se/ucsigill2/sigill?org=556886-4622&language=swe&product=lsa&fontcolor=b&type=svg",
                    href: "https://www.uc.se/risksigill2?showorg=556886-4622&language=swe",
                },
                header: {
                    listLinks: [
                        "Hem",
                        "Om oss",
                        "Projekt",
                        "Kontakt"
                    ]
                },
                footer: {
                    info: [
                        "Kontakta oss",
                        "Telefon",
                        "Hitta hit"
                    ]
                },
                aboutText: {
                    listFactsTitle: "Om oss",
                    listFacts: [
                        "Projektledning, projekteringsledning och byggledning av mark- och infrastrukturprojekt",
                        "Verksamhet sedan 2012",
                        "Teoretisk och praktisk projektledningskompetens hos samtliga medarbetare",
                        "Företag med stark likviditet. UC riskklass 1"
                    ],

                    listValuesTitle: "Värderingar",
                    listValues: ["Lösningsinriktat, kundfokuserat och projektfokuserat tjänsteföretag",
                        "Kunden och projektets mål värnas alltid",
                        "Människorna i projekt är individer som skapar team.  Professionella, nyfikna och lärande",
                        "Tar alltid ansvar för utfört arbete"],

                    listIdeaTitle: "Affärsidé",
                    listIdea: ["Starkt varumärke i branschen med kvalificerade resurser för ledning av mark- och infrastrukturprojekt",
                        "Kundfokuserat tjänsteföretag som arbetar för långsiktiga affärsrelationer"],

                    listSystemTitle: "Verksamhetsystem KMA",
                    listSystem: ["Långsiktiga affärsrelationer kräver kännedom och kunskap hur rätt kvalitet uppnås. Rätt kvalitet uppnås genom utförande av rätt arbetsuppgifter. Vårt verksamhetssystem hjälper oss i arbetet med att göra rätt arbetsuppgifter och att få långsiktiga affärsrelationer.",
                        "Vårt företagsinterna verksamhetssystem är uppbyggt för att uppfylla krav i SS-EN ISO 9001:2015, 14001:2015 samt 45001:2018. I verksamhetssystemet ingår fungerande stödprocesser upprättade med stöd utifrån SS-ISO 21500:2012 för uppdragsledning/ projektledning/ projekteringsledning/ byggledning."],
                },
                projectText: {
                    imgText: "Foto: Stockholm stad",
                    vasagatanTitle: "Projekt Vasagatan",
                    vasagatanText: "Vasagatan mellan Tegelbacken och Norra Bantorget byggs om för att möta dagens och framtidens behov. Nya Vasagatan blir en välkomnande,"
                        + "tryggare och mer levande stadsgata med människorna i centrum. Projektvolym ca 300 Mkr. Projektledningsbyråns uppdrag är projekt- och projekteringsledning." +
                        "Uppdraget påbörjades 2019 och är pågående.",

                    westBridgeTitle: "Projekt Västerbron",
                    westBridgeText: "Västerbron färdigställdes 1935 och består av två broar, bro över Riddarfjärden och bro över Pålsundet.  Projektet omfattar utredning av Västerbrons" +
                        " konstruktiva tillstånd samt framtagande av förslag till åtgärder för att säkra framtida funktion. Projektvolym ca 15 Mkr. Projektledningsbyråns uppdrag är projektledning" +
                        " och projekteringsledning. Uppdraget påbörjades 2018 och är pågående.",

                    vasaBridgeTitle: "Projekt Vasabron",
                    vasaBridgeText: "Vasabron färdigställdes 1878 och består av sju stycken bågbroar som sammanbinder Gamla Stan med Norrmalm. Projektet omfattar utredning av Vasabrons " +
                        "konstruktiva tillstånd samt framtagande av förslag till åtgärder för att säkra framtida funktion. Projektvolym ca 15 Mkr. Projektledningsbyråns uppdrag är projektledning " +
                        "och projekteringsledning. Uppdraget påbörjades 2019 och är pågående.",

                    slussenTitle: "Projekt Slussen",
                    slussenText: "Slussen är efter över 80 år utsliten och byggs därför upp från grunden. Området anpassas för att möta behoven hos dagens och morgondagens stockholmare och" +
                        " framtidens Slussen blir en effektiv och trygg knutpunkt för gående, cyklister och kollektivtrafik. " +
                        "Projektvolym ca 12 000 Mkr. Projektledningsbyråns uppdrag har varit projektledning av ett av tre delområden i utrednings- projekterings- och genomförandeskedet. Uppdraget påbörjades 2012 och avslutades 2018."

                },
                contactText: {
                    mainTitle: "Våra medarbetare",
                    mapsTitle: "Kontor"
                }
            },
            eng: {
                sigil: {
                    title: "The seal is issued by UC AB. The image is linked to information about UC's Credit Rating.",
                    src: "https://www.uc.se/ucsigill2/sigill?org=556886-4622&language=eng&product=lsa&fontcolor=b&type=svg",
                    href: "https://www.uc.se/en/risksigill2?showorg=556886-4622&language=eng"
                },
                header: {
                    listLinks: [
                        "Home",
                        "About",
                        "Project",
                        "Contact"
                    ]
                },
                footer: {
                    info: [
                        "Contact",
                        "Phone",
                        "Find us"
                    ]
                },
                aboutText: {
                    listFactsTitle: "About",
                    listFacts: [
                        "Project management, project management and construction management of land and infrastructure projects",
                        "Operating since 2012",
                        "Companies with strong liquidity. UC risk class 1",
                        "All employees possess both theoretical and practical project management skills"
                    ],

                    listValuesTitle: "Values",
                    listValues: [
                        "Solution-oriented, customer-focused and project-focused service company",
                        "The customer and the goal of the project are always protected",
                        "The people in projects are individuals who create teams.  Professional, curious and learning",
                        "Always takes responsibility for work done"
                    ],

                    listIdeaTitle: "Business Concept",
                    listIdea: [
                        "Strong brand in the industry with qualified resources for the management of land and infrastructure projects",
                        "Customer-focused service companies working for long-term business relationships"
                    ],

                    listSystemTitle: "Operating systems- KMA",
                    listSystem: [
                        "Long-term business relationships require knowledge and knowledge how the right quality is achieved. The right quality is achieved by carrying out the right tasks. Our business system helps us in the process of doing the right tasks and getting long-term business relationships.",
                        "Our internal business system is structured to meet requirements in SS-EN ISO 9001:2015, 14001:2015 and 45001:2018. The operating system includes functioning support processes established with support based on SS-ISO 21500:2012 for mission management/ project management/ project management/ construction management/ construction management."
                    ],
                },
                projectText: {
                    imgText: "Photo: Stockholm stad",
                    vasagatanTitle: "Project Vasagatan",
                    vasagatanText: "The part of Vasagatan between Tegelbacken and Norra Bantorget is being rebuilt to meet the needs of today and the future. The new Vasagatan will be a welcoming, safer and more vibrant city street with the people in the city centre. Project volume approximately 300 MSEK. The project management agency's mission is project and design management. The mission began in 2019 and is ongoing.",

                    westBridgeTitle: "Project Västerbron",
                    westBridgeText: "Västerbron was completed in 1935 and consists of two bridges, bridge over Riddarfjärden and bridge over Pålsundet.  The project includes the investigation of Västerbron's constructive state and the development of proposals for measures to ensure future function. Project volume approximately 15 MSEK. The project management agency's assignment is project management and design management. The mission began in 2018 and is ongoing.",

                    vasaBridgeTitle: "Project Vasabron",
                    vasaBridgeText: "Vasabron was completed in 1878 and consists of seven arch bridges linking Old Town with Norrmalm. The project includes the investigation of Vasabron's constructive state and the development of proposals for measures to ensure future function. Project volume approximately 15 MSEK. The project management agency's assignment is project management and design management. The mission began in 2019 and is ongoing.",

                    slussenTitle: "Project Slussen",
                    slussenText: "After over 80 years, the lock is worn out and is therefore built from scratch. The area is adapted to meet the needs of today's and tomorrow's Stockholmers and the future Slussen will be an efficient and safe hub for pedestrians, cyclists and public transport. " +
                        "Project volume approximately 12 000 MSEK. The project management agency's mission has been the project management of one of three sub-areas of the investigation, planning and implementation phase. The mission began in 2012 and ended in 2018."

                },
                contactText: {
                    mainTitle: "Our coworkers",
                    mapsTitle: "Office"
                }
            },

        }
    }
    setLanguage = (lang) => {
        this.props.cookie.set('language', lang);
        this.setState({ language: lang });
        this.forceUpdate();
    }
    checkLanguage = () => {
        if (this.state.language == 'swe') {
            return true;
        } else if (this.state.language == 'eng') {
            return false;
        }
        return true;
    }
    render() {
        return (<div>
            <Media queries={{
                small: "(max-width: 774px)",
                medium: "(min-width: 775px)"
            }}>
                {matches => (
                    <Fragment>
                        {matches.small && 
                        <Fragment>
                           
                        </Fragment>
                        }
                        {matches.medium && 
                            <Fragment>
                                <Header content={this.checkLanguage() ? this.state.swe.header : this.state.eng.header} setLanguage={this.setLanguage} />
                                <Slideshow fadeProperties={this.state.fadeProperties} fadeImages={this.state.images} />
                                <BrowserRouter>
                                    <Route exact path="/" component={Home} />
                                    <Route exact path="/about"
                                        render={(props) => <About content={this.checkLanguage() ? this.state.swe.aboutText : this.state.eng.aboutText} sigil={this.checkLanguage() ? this.state.swe.sigil : this.state.eng.sigil} />}
                                    />
                                    <Route exact path="/contact"
                                        render={(props) => <Contact content={this.checkLanguage() ? this.state.swe.contactText : this.state.eng.contactText} />}
                                    />
                                    <Route exact path="/project"
                                        render={(props) => <Project content={this.checkLanguage() ? this.state.swe.projectText : this.state.eng.projectText} />}
                                    />
                                </BrowserRouter>
                                <Footer content={this.checkLanguage() ? this.state.swe.footer : this.state.eng.footer} />
                            </Fragment>}
                    </Fragment>
                )}
            </Media>

        </div>);
    };

}

export default App;