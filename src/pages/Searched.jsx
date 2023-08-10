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
    <main className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mt-4">
       {searchedRecipe.map((recipe) => {
          return (
            <Link
              to={`/recipe/${recipe.id}`}
              key={recipe.id}
              className="block rounded-lg p-4 shadow-sm shadow-indigo-100"
            >
              <img
                alt="Home"
                src={recipe.image}
                className="h-56 w-full rounded-md object-cover"
              />

              <div className="mt-2">
                <dl>
                  <div>
                    <dd className="font-medium mt-4">{recipe.title}</dd>
                  </div>
                </dl>
              </div>
            </Link>
  );
          })}
    </main>
    
  );
};

export default Searched;
