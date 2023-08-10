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
      <section className="mb-10">
        <div>
          <h2>{details?.title}</h2>
          <img src={details?.image} alt="" className=" rounded-md object-cover" />
        </div>
        <div>
          <button
            className={activeTab === "instructions" ? "active mr-4 mt-4 inline-block rounded border border-current px-8 py-3 text-sm font-medium text-indigo-600 transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:text-indigo-500" : "mt-4 rounded border px-8 py-3 mr-4"}
            onClick={() => setActiveTab("instructions")}
          >
            instructions
          </button>

          <button
            className={activeTab === "ingredients " ? "active inline-block rounded border border-current px-8 py-3 text-sm font-medium text-indigo-600 transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:text-indigo-500" : " "}
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </button>
          {activeTab === "instructions" && (
            <div className="max-w-[80ch] mt-4 text-sm text-gray-500">
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
