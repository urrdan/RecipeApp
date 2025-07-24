import { NavLink } from "react-router-dom";
import type { category } from "../../apis/types";
import SearchComp from "./SearchComp";
interface componentProp {
  categories: category[];
}

const Home = ({ categories }: componentProp) => {
  const categoryOnClick = (i: string) => {
    console.log(i);
  };
  return (
    <>
      <SearchComp />
      <p className="">
        "Master the secret to making dishes all around the globe in few simple
        steps"
      </p>
      <h2 className="my-10  font-secondary">Categories</h2>
      <div className="grid  sm:gap-y-12  sm:grid-cols-3 ">
        {categories.map((category) => (
          <NavLink to={`/categorymeals?category=${category.strCategory}`}>
            <div
              className="category-card sm:category-card_big-screen max-sm:category-card_small-screen"
              onClick={() => categoryOnClick(category.strCategory)}
            >
              <img
                className="sm:w-[80%] max-sm:h-[100%] sm:absolute sm:bottom-[50%]"
                src={category.strCategoryThumb}
                alt="wrong"
              ></img>
              <p className=" sm:absolute sm:mt-1 sm:top-[50%]">
                {category.strCategory}
              </p>
              <span className=""></span>
            </div>
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default Home;
