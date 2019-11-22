import React, { Component } from 'react';
import './chosen_character_4.css'
import { Link } from 'react-router-dom';

class ChosenCharacter extends Component {

    render(){
        return (
        <>
            <div id="container">
                <div className="frame">
                    <img src={this.props.chosenCharacter.image} alt="chosen character"/>
                </div>
                <div id="chosenDetails">
                    <h1>{this.props.chosenCharacter.name}</h1>
                    <ul>
                        <li>Height: {this.props.chosenCharacter.height}m</li>
                        <li>Homeworld: {this.props.chosenCharacter.homeworld}</li>
                        <li>Species: {this.props.chosenCharacter.species}</li>
                    </ul>
                </div>
            </div>
            <Link to="./wiseyoda"><button id="findMyLoveButton">Find my love!</button></Link>
        </>
        )

    }
}

export default ChosenCharacter;