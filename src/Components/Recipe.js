import React from 'react';
import {Link} from 'react-router-dom'

class Recipe extends React.Component {

    componentDidMount = async () => {
        const API_KEY = '3341a283cb3aaca931c2a5f74d4ff355';

        let recipeName = this.props.location.state.recipe;
        const API_CALL = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}`);

        const response = await API_CALL.json();

        this.setState({
            activeRecipe: response.recipes[0]
        });
    }

    state = {
        activeRecipe: []
    }

    render() {
        const recipe = this.state.activeRecipe;

        return (
            <div className="container">
                {recipe.length !== 0 &&
                    <div className="active-recipe">
                        <img src={recipe.image_url} alt={recipe.title} className="active-recipe__img" />
                        <h3 className="active-recipe__title">{recipe.title}</h3>
                        <h4 className="active-recipe__publisher">
                            Publisher: <span>{recipe.publisher}</span>
                        </h4>
                        <p className="active-recipe__website">
                            <span><a href={recipe.publisher_url}>{recipe.publisher_url}</a></span>
                        </p>
                       
                        <button className="active-recipe__button">
                            <Link to="/">Go Home</Link>
                        </button>
                        
                    </div>
                }
            </div>
        );
    }
}

export default Recipe;
