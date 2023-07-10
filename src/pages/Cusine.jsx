import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Cusine = () => {
  const [cusine, setCusine] = useState([]);
  let params = useParams();
  const getCusine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
        import.meta.env.VITE_apiKey
      }&cusine=${name}`
    );

    const recipes = await data.json();
    setCusine(recipes.results);
  };

  useEffect(() => {
    getCusine(params.type);
    console.log(params.type);
  }, [params.type]);

  return (
    <div>
      {cusine.map((recipe) => {
        return (
          <div key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>
              <img src={recipe.image} alt={recipe.title} />
              <h4>{recipe.title}</h4>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Cusine;
