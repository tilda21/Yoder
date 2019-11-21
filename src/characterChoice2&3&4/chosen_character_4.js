import React, { Component } from 'react';
import Button from '../auxiliaries/button';

class ChosenCharacter extends Component {
    render(){
        return (
        <>
            <h2>You are...</h2>
            <div>
                Image of the character the user chose. will get this from state.
            </div>
            <div>
                <p>Details about chosen character, will also get this from state, passed as props.</p>
            </div>
            <Button/>
        </>
        )

    }
}

export default ChosenCharacter;