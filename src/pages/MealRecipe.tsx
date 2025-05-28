import { useEffect, useState } from "react";
import { getMealRecipe } from "../apis/endpoints";
type mealDetails = {
  strMeal: string;
  strCategory: string;
  strArea: string;
  idMeal: string;
  strMealThumb: string;
  strInstructions: string;
};
const MealRecipe = () => {
  const [data, setData] = useState<any>({});
  const id = new URLSearchParams(window.location.search).get("id") || "";
  const getData = async () => {
    const _data: mealDetails = await getMealRecipe(id);
    console.log(_data);
    setData(_data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="bg-[#343a40]">
      <section>
        <h3>{data.strMeal}</h3>
        <p>
          {data.strCategory}/ {data.strArea}
        </p>
      </section>
      <section>{data.strInstructions}</section>
      <section>
        <h3>Watch Video</h3>
        <iframe
          src={(data.strYoutube || "").replace("watch?v=", "embed/")}
          title="wewe"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
    </div>
  );
};

export default MealRecipe;
