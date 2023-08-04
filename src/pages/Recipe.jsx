import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

const Recipe = () => {
  let params = useParams();
  const [details, setDetails] = useState();
  const [activeTab, setActiveTab] = useState("instructions");

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/${
          params.name
        }/information?apiKey=${import.meta.env.VITE_apiKey}`
      );
      const data = await res.json();
      setDetails(data);
      console.log(data);
    };
    fetchDetails();
  }, [params.name]);

  return (
    <>
      <section>
        <div>
          <h2>{details?.title}</h2>
          <img src={details?.image} alt="" />
        </div>
        <div>
          <button
            className={activeTab === "instructions" ? "active" : " "}
            onClick={() => setActiveTab("instructions")}
          >
            instructions
          </button>

          <button
            className={activeTab === "ingredients" ? "active" : " "}
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </button>
          {activeTab === "instructions" && (
            <div>
              <p dangerouslySetInnerHTML={{ __html: details?.summary }}></p>
              <p
                dangerouslySetInnerHTML={{ __html: details?.instructions }}
              ></p>
            </div>
          )}
          {activeTab === "ingredients" && (
            <ul>
              {details?.extendedIngredients.map((ingredient) => {
                return (
                  <li className="text-gray-600" key={ingredient.id}>
                    {ingredient.original}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </section>
    </>
  );
};

export default Recipe;
