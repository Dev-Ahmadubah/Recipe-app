import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Feed = () => {
  const randomNumber = 9;

  const [popular, setPopular] = useState([]);
  useEffect(() => {
    getPopular();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");

    if (check) {
      setPopular(JSON.parse(check));
    } else {
      try {
        const res = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${
            import.meta.env.VITE_apiKey
          }&number=${randomNumber}`
        );
        const data = await res.json();
        localStorage.setItem("popular", JSON.stringify(data.recipes));
        setPopular(data.recipes);
        console.log(popular);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      {/* <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden  py-6 sm:py-12">
        <div className="scrollbar-hide mt-14 flex w-full snap-x snap-mandatory scroll-px-10 gap-10 overflow-x-scroll scroll-smooth px-10">
          {popular?.map((recipe) => {
            return (
              <div
                key={recipe.id}
                className="md:2/3 relative aspect-[2/3] w-[90%] shrink-0 snap-start snap-always rounded-xl bg-orange-100 sm:w-[44%] md:w-[30%]"
              >
                <Link to={`/recipe/${recipe.id}`}>
                  <div className="absolute bottom-0 z-10 w-full rounded-xl bg-gradient-to-t from-black px-5 py-3">
                    <p className="mt-4 text-xl font-bold text-white">
                      {recipe.title}
                    </p>
                  </div>

                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="h-full w-full rounded-xl object-cover"
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div> */}
    <h1 className="font-semibold text-2xl my-4 text-gray-800">Your Feed</h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        {popular.map((recipe) => {
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
      </div>
    </>
  );
};

export default Feed;
