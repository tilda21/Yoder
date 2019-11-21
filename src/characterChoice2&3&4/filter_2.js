/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import './filter_2.css';
import '../homepage1/homepage_1'
import Homepage_1 from '../homepage1/homepage_1';
import { Link } from 'react-router-dom';


class FilterByGender extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        gender: '',
        filteredCharacters: [],
      };
    }
    

    handleGender = (e) => {
        let filteredCharacters = this.props.characters.filter(character => {
            if (e.target.value === 'all') return true;
            return character.gender === e.target.value;
        })
        
        this.setState({ 
            gender: e.target.value,
            filteredCharacters: filteredCharacters
        })

        return filteredCharacters;
    }

        
    render(){
        return (
         <>
         <Homepage_1 balloonMessage={
            <div>
                <h2>First, choose your character:</h2>
                 <button 
                    onClick={this.handleGender} 
                    value="female" 
                    className="genderButton">
                        Female 
                </button>  
                 <button 
                    onClick={this.handleGender} 
                    value="male"
                    className="genderButton">
                        Male 
                </button>
                 <button 
                    onClick={this.handleGender} 
                    value="all"
                    className="genderButton">
                        All 
                </button>
            </div>
         }/>
            <div id="filteredCharactersContainer">
                    {
                        this.state.filteredCharacters.map(character => { 
                            return (
                            <Link to="/chosencharacter"><div 
                                id="filteredCharactersChild"
                                value={character.name}
                                onClick={() => this.props.handleChosenCharacter(character)
                                }
                                key={character.id}
                                >
                                    <img 
                                        src={character.image} 
                                        alt="character" 
                                        key={character.id} 
                                        />
                                    <h2>{character.name}</h2>
                            </div>
                            </Link>
                            )
                        })
                    }
                    
            </div>
         </>
        )

    }

    }


export default FilterByGender;