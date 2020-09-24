import React from 'react';

const Recipe = ({title, totalTime, url, dietLabels, image, ingredients}) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>Cooking time :{totalTime}min {dietLabels}</p>
            <ul>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <p>{url}</p>
            <img src={image} alt=""></img>
        </div>
    );
}

export default Recipe;

//source from https://www.youtube.com/watch?v=U9T6YkEDkMo&list=PLDyQo7g0_nsVHmyZZpVJyFn5ojlboVEhE&index=3