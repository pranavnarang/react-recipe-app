import React from 'react';

const Recipes = (props) => (
    <div className="container">
        <div className="row">
            {props.recipes.map((recipe) => {
                return (
                    <div key={recipe.title} className="col-md-4" style={{ marginBottom: "2rem"}}>
                        <div className="recipe__box">
                            <img class="recipe__box-image" 
                            src={recipe.image_url} 
                            alt={recipe.title}
                            style={{ marginBottom: "2rem"}} />
                        </div>
                        <div className="recipe__text">
                            <h5 className="recipe__title">{recipe.title}</h5> 
                            <p className="recipe__subtitle">Publisher: &nbsp;
                                <span>
                                    {recipe.publisher}
                                </span>
                            </p>
                        </div>
                        <button className="recipe__buttons">View Recipe</button>
                    </div>
                );
            })
            }
        </div>
    </div>
);

export default Recipes;