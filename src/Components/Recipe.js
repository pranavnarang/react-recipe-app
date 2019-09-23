import React from 'react';

class Recipe extends React.Component{

    componentDidMount = () => {
        e.preventDefault();
        const API_KEY = '3341a283cb3aaca931c2a5f74d4ff355';

        recipeName = this.props.location.state.recipe;
        const API_CALL = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}`);
    
        const response = await API_CALL.json();
    
        this.setState({
          activeRecipe: response.recipes[0]
        });
    }

    state = {
        activeRecipe: []
    }

    render(){
        return(
            <div>hi</div>
        );
    }
}

export default Recipe;
