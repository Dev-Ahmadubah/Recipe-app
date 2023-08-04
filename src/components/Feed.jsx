import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Feed = () => {
  const randomNumber = 9;

  const [list, setList] = useState([]);
  useEffect(() => {
    getFeed();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getFeed = async () => {
    const check = localStorage.getItem("list");
    if (check) {
      setList(JSON.parse(check));
    } else {
      try {
        const res = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${
            import.meta.env.VITE_apiKey
          }&number=${randomNumber}&tags=dessert`
        );
        const data = await res.json();
        localStorage.setItem("list", JSON.stringify(data.recipes));
        setList(data.recipes);
        console.log(list);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-6 sm:py-12">
        <div className="scrollbar-hide mt-14 flex w-full snap-x snap-mandatory scroll-px-10 gap-10 overflow-x-scroll scroll-smooth px-10">
          {list?.map((recipe) => {
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
      </div>
    </>
  );
};

export default Feed;
