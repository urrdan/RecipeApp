import { useEffect, useState } from "react";
import type { categoryMeal } from "../apis/types";
import { getCategoriesMeals } from "../apis/endpoints";
import { NavLink } from "react-router-dom";

const CategoryMeals = () => {
  const [data, setData] = useState<categoryMeal[]>([]);
  const category =
    new URLSearchParams(window.location.search).get("category") || "";
  const getData = async (category: string) => {
    const _data = await getCategoriesMeals(category);
    setData(_data);
  };
  useEffect(() => {
    getData(category);
  }, []);
  return (
    <>
      <h3 className="text-3xl  underline my-4">{category}</h3>
      <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(250px,_1fr))]">
        {data.map((item) => (
          <NavLink to={`/meal?id=${item.idMeal}`}>
            <div className="category-meals-card" key={item.idMeal}>
              <img
                src={item.strMealThumb}
                alt="wrong"
                className="w-[70%] rounded-sm m-auto shadow-teal-200 shadow-md"
              ></img>
              <h4 className=" my-2 text-2xl">{item.strMeal}</h4>
            </div>
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default CategoryMeals;
