import { NavLink } from "react-router-dom";

const Category = () => {
  return (
    <main className="flex item-center justify-center space-x-10 flex-wrap lg:flex-nowrap gap-y-4">
      <NavLink to="/cusine/African">
        <h4 className="w-20 h-20 bg-indigo-800 text-white rounded-full justify-center items-center flex">
          African
        </h4>
      </NavLink>

      <NavLink to="/cusine/American">
        <h4 className="w-20 h-20 bg-indigo-800 text-white rounded-full justify-center items-center flex">
          American
        </h4>
      </NavLink>
      <NavLink to="/cusine/Indian">
        <h4 className="w-20 h-20 bg-indigo-800 text-white rounded-full justify-center items-center flex">
          Indian
        </h4>
      </NavLink>
      <NavLink to="/cusine/Italian">
        <h4 className="w-20 h-20 bg-indigo-800 text-white rounded-full justify-center items-center flex">
          Italian
        </h4>
      </NavLink>
      <NavLink to="/cusine/Japanese">
        <h4 className="w-20 h-20 bg-indigo-800 text-white rounded-full justify-center items-center flex">
          Japanese
        </h4>
      </NavLink>
      <NavLink to="/cusine/Spanish">
        <h4 className="w-20 h-20 bg-indigo-800 text-white rounded-full justify-center items-center flex">
          Spanish
        </h4>
      </NavLink>
      <NavLink to="/cusine/Thai">
        <h4 className="w-20 h-20 bg-indigo-800 text-white rounded-full justify-center items-center flex">
          Thai
        </h4>
      </NavLink>
    </main>
  );
};

export default Category;
