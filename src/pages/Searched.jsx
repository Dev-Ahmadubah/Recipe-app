/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Searched = () => {
  const [searchedRecipe, setSearchedRecipe] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
        import.meta.env.VITE_apiKey
      }&query=${name}`
    );
    const recipes = await data.json();
    setSearchedRecipe(recipes.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);
  return (
    <main>
      {searchedRecipe?.map((recipe) => {
        return (
          <Link to={`/recipe/${recipe.id}`}>
            <div key={recipe.id}>
              <img src={recipe.image} alt={recipe.title} />
              <h4>{recipe.title}</h4>
            </div>
          </Link>
        );
      })}
    </main>
  );
};

export default Searched;
