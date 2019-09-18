import React, { Component } from 'react';
import './App.css';
import Form from './Components/Form'

class App extends Component {
  state = {
    recipes: []
  }

  getRecipe = async (e) => {

    e.preventDefault();

    const API_KEY = '3341a283cb3aaca931c2a5f74d4ff355';

    const recipeName = e.target.elements.recipeName.value;

    const API_CALL = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=chicken%20breast&count=10`);

    const response = await API_CALL.json();

    this.setState({
      recipes: response.recipes
    });

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe}/>
        {
          this.state.recipes.map((recipe) => { 
            return <p key={recipe.recipe_id}>{recipe.title}</p>
          })
        }
      </div>
    );
  }
}

export default App;