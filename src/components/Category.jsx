import { Link } from "react-router-dom";

const Category = () => {
  const dataInfo = [
    {
      name: "African",
      url: "/cusine/African",
    },
    {
      name: "American",
      url: "/cusine/American",
    },
    {
      name: "Indian",
      url: "cusine/Indian",
    },
    {
      name: " Italian",
      url: "/cusine/Italian",
    },
    {
      name: "Japanese",
      url: "/cusine/Japanese",
    },
    {
      name: "Spanish",
      url: "/cusine/Spanish",
    },
    {
      name: "Thai",
      url: "/cusine/Thai",
    },
  ];
  return (
    <section className="mt-10">
      <div className="flex item-center justify-center space-x-10 flex-wrap lg:flex-nowrap gap-y-4">
        {dataInfo.map((item, idx) => {
          <Link to={item.url} key={idx}>
            <h4 className="w-20 h-20 bg-indigo-800 text-white rounded-full justify-center items-center flex">
              {item.name}
            </h4>
          </Link>;
         
        })}
      </div>
      <main className="flex item-center justify-center space-x-10 flex-wrap lg:flex-nowrap gap-y-4">
        <Link to="/cusine/African">
          <h4 className="w-20 h-20 bg-indigo-800 text-white rounded-full justify-center items-center flex">
            African
          </h4>
        </Link>

        <Link to="/cusine/American">
          <h4 className="w-20 h-20 bg-indigo-800 text-white rounded-full justify-center items-center flex">
            American
          </h4>
        </Link>
        <Link to="/cusine/Indian">
          <h4 className="w-20 h-20 bg-indigo-800 text-white rounded-full justify-center items-center flex">
            Indian
          </h4>
        </Link>
        <Link to="/cusine/Italian">
          <h4 className="w-20 h-20 bg-indigo-800 text-white rounded-full justify-center items-center flex">
            Italian
          </h4>
        </Link>
        <Link to="/cusine/Japanese">
          <h4 className="w-20 h-20 bg-indigo-800 text-white rounded-full justify-center items-center flex">
            Japanese
          </h4>
        </Link>
        <Link to="/cusine/Spanish">
          <h4 className="w-20 h-20 bg-indigo-800 text-white rounded-full justify-center items-center flex">
            Spanish
          </h4>
        </Link>
        <Link to="/cusine/Thai">
          <h4 className="w-20 h-20 bg-indigo-800 text-white rounded-full justify-center items-center flex">
            Thai
          </h4>
        </Link>
      </main>
    </section>
  );
};

export default Category;
