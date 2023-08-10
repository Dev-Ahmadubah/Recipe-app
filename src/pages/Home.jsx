import Feed from "../components/Feed";
import Popular from "../components/Popular";
import Category from "../components/Category";

const Home = () => {
  return (
    <div>
      <Category />
      <Feed />
      <Popular />
    </div>
  );
};

export default Home;
