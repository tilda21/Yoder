import React, { Component } from 'react';
import Button from '../auxiliaries/button';
import './chosen_character_4.css'
import { Link } from 'react-router-dom';

class ChosenCharacter extends Component {

    capitalize = (s) => {
        return s.charAt(0).toUpperCase() + s.slice(1)
      }

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
                        <li><span>Height: </span> {this.props.chosenCharacter.height}m</li>
                        <li><span>Homeworld: </span> {this.capitalize(this.props.chosenCharacter.homeworld)}</li>
                        <li><span>Species: </span> {this.capitalize(this.props.chosenCharacter.species)}</li>
                    </ul>
                </div>
            </div>
            <Link to="./wiseyoda"><button id="findMyLoveButton">Find my love!</button></Link>
        </>
        )

    }
}

export default ChosenCharacter;