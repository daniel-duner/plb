import React, { Component } from 'react';

import './font.css';
import './contactCard.css';

class ContactCard extends Component {
    render() {
        return (
            // col-lg bredden på bilden, 
                <div class="col-sm-6 col-md-4 col-lg-5 mt-4">
                    <div class="card">
                        <img class="card-img" src={this.props.personImages[1]}/>
                        <div class="card-block">
                            <h4 className="post-standard-header">Fredrik Molin</h4>
                            <div className="post-standard-text">
                                Fredrik Molin är en projektledare som jobbar på vasagatan.
                            </div>
                        </div>
                    </div>
                </div>
        );
    };
}

export default ContactCard;