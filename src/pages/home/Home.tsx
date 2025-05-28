import { NavLink } from "react-router-dom";
import type { category } from "../../apis/types";
interface componentProp {
  categories: category[];
}

const Home = ({ categories }: componentProp) => {
  console.log(categories);

  const categoryOnClick = (i: string) => {
    console.log(i);
  };
  return (
    <>
      <div className="bg-white w-[70%] translate-y-[-50%] p-5 m-auto rounded">
        <input
          placeholder="Search Meal"
          className="font-secondary bg-[#ebebeb] w-full max-w-[350px]  px-2 py-1 rounded text-[14px] "
        />
      </div>
      <p className="">
        "Master the secret to making dishes all around the globe in few simple
        steps"
      </p>
      <h3 className="my-10 text-3xl underline">Categories</h3>
      <div className="grid  sm:gap-y-12  sm:grid-cols-[repeat(auto-fit,minmax(250px,_1fr))] ">
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
