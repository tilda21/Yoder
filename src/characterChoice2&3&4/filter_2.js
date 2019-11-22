/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import './filter_2.css';
import '../homepage1/homepage_1'
import Homepage_1 from '../homepage1/homepage_1';
import { Link } from 'react-router-dom';
import { DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


class FilterByGender extends React.Component {
    constructor(props) {
      super(props);
      this.scrollToTop = this.scrollToTop.bind(this);
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

    scrollToTop() {
        scroll.scrollToTop();
      }
      scrollTo() {
        scroller.scrollTo('scroll-to-element', {
          duration: 1800,
          delay: 0,
          smooth: 'easeInOutQuart'
        })
      }

        
    render(){
        return (
         <>
         <Homepage_1 balloonMessage={
            <div className="test1" to="test1" onClick={() => this.scrollTo()}>
                
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
         <Element name="scroll-to-element" className="element">
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
            </Element>
         </>
        )

    }

    }


export default FilterByGender;