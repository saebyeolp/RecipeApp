import React from 'react';

const Recipe = ({title, url, dietLabels, image, ingredients}) => {
    return (
        <div className="recipeBox">
            <img src={image} alt={title}></img>
            <div className="titleBox">
                <h1>{title}</h1>
                <p>
                    {/* <span className="dietLabel">{dietLabels}</span> */}
                    {dietLabels.length == 0 ? <span className="dietLabel">{dietLabels}</span> : <span></span> }
                </p>
            </div>
            <div className="smallTitle">Ingredients</div>
            <ul>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <a className="recipeBtn" href={url} target="_blank">See Recipe 》</a>
        </div>
    );
}

export default Recipe;

//source from https://www.youtube.com/watch?v=U9T6YkEDkMo&list=PLDyQo7g0_nsVHmyZZpVJyFn5ojlboVEhE&index=3