import React,{Component} from 'react';

import Card from './Card.js';

class Contact extends Component{
    
    renderCards(person){
        person.map((person) => {
            return <Cards
            image={person.url}
            key={person.id} 
            firstName={person.firstName}  
            lastName={person.lastName}
            email={person.email}
            phone={person.phone}
            description={person.description}
            />
        });     
    };
    render (){
        return(
            <div>Contact</div>
        );
    }
}



export default Contact;