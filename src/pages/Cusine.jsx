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
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mt-10">
       {cusine.map((recipe) => {
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
      {/* {cusine.map((recipe) => {
        return (
          <div key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>
              <img src={recipe.image} alt={recipe.title} />
              <h4>{recipe.title}</h4>
            </Link>
          </div>
        );
      })} */}
    </div>
  );
};

export default Cusine;
