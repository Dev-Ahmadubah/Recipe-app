import { useEffect, useState } from "react";

const Feed = () => {
  const randomNumber = 9;

  const [list, setList] = useState([]);
  useEffect(() => {
    const getList = async () => {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${
          import.meta.env.VITE_apiKey
        }&number=${randomNumber}&tags=dessert`
      );
      const data = await res.json();
      setList(data.recipes);
      console.log(list);
    };
    getList();
  }, [1]);

  return (
    <>
      <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        <div className="scrollbar-hide mt-14 flex w-full snap-x snap-mandatory scroll-px-10 gap-10 overflow-x-scroll scroll-smooth px-10">
          {/* <div className="max-w-lg px-10">
            <h1 className="text-5xl font-bold tracking-tight text-[#2f2963]">
              Must See Places
            </h1>
            <p className="mt-5 opacity-50">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              elementum metus eu enim rhoncus posuere.
            </p>
            <button className="to mt-5 min-w-[10rem] rounded-full bg-orange-500 bg-gradient-to-r from-rose-500 px-5 py-3 font-bold text-white shadow-xl shadow-rose-400">
              Explore
            </button>
          </div> */}

          {list?.map((recipe) => {
            return (
              <div
                key={recipe.id}
                className="md:2/3 relative aspect-[2/3] w-[90%] shrink-0 snap-start snap-always rounded-xl bg-orange-100 sm:w-[44%] md:w-[30%]"
              >
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
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Feed;
