import React from 'react';
import './filter_2.css';


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
        console.log(this.state.gender, this.state.filteredCharacters)
        return (
         <>
            <div>Calling Yoda component here</div>
            <div>
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
            <div id="filteredCharactersContainer">
                    {
                        this.state.filteredCharacters.map(character => {
                            return (
                            <div id="filteredCharactersChild">
                                <img src={character.image} alt="character" key={character.id}/>
                                <h2>{character.name}</h2>
                                </div>
                            )
                        })
                    }
                    
            </div>
         </>
        )

    }

    }


export default FilterByGender;