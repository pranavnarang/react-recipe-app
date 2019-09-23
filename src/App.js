import React, { Component } from 'react';
import './App.css';
import Form from './Components/Form';
import Recipes from './Components/Recipes';

class App extends Component {
  state = {
    recipes: []
  }

  getRecipe = async (e) => {

    e.preventDefault();

    const API_KEY = '3341a283cb3aaca931c2a5f74d4ff355';

    const recipeName = e.target.elements.recipeName.value;

    const API_CALL = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`);

    const response = await API_CALL.json();

    this.setState({
      recipes: response.recipes
    });

    console.log(this.state.recipes);

  }



  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    console.log(recipes);
    localStorage.setItem("recipes", recipes);
  }
  
  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({ recipes });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe}/>
        <Recipes recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default App;