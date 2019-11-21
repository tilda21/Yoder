import React, { Component } from 'react';
import Button from '../auxiliaries/button';
import './chosen_character_4.css'

class ChosenCharacter extends Component {

    render(){
        return (
        <>
            <h1>You are...</h1>
            <div id="container">
                <div id="chosenImg">
                    <img src="https://via.placeholder.com/300x400" alt="chosen character"/>
                    <br/>
                    Image of the character the user chose. will get this from state.
                </div>
                <div id="chosenDetails">
                    <p>Details about chosen character, will also get this from state, passed as props?</p>
                </div>
            </div>
            <Button/>
        </>
        )

    }
}

export default ChosenCharacter;