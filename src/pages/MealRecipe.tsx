import { useEffect, useState } from "react";
import { getMealRecipe } from "../apis/endpoints";
type mealDetails = {
  strMeal: string;
  strCategory: string;
  strArea: string;
  idMeal: string;
  strMealThumb: string;
  strInstructions: string;
  strYoutube: string;
  ingredients: string[];
};
const MealRecipe = () => {
  const [data, setData] = useState<mealDetails>();
  const id = new URLSearchParams(window.location.search).get("id") || "";
  const getData = async () => {
    const _data: mealDetails = await getMealRecipe(id);
    console.log(_data);
    //_data.ingredients=[]

    /* const f = (): [] => {
      const ingredients: string[] = [];
      let numb = 0;
      while (numb >= 0) {
        numb++;
        let currentKey: "strIngredient1" = "strIngredient1";
        if (_data[currentKey]) {
          if (ingredients.includes(_data[currentKey])) {
          } else {
            ingredients.push(_data[currentKey]);
          }
        } else {
          numb = -1;
        }
      }
      return ingredients;
    }; */

    setData(_data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-[#343a40] p-2 text-[#b4b4b4]">
      {data && (
        <>
          <section>
            <h4 className="text-white my-2">{data.strMeal}</h4>
            <p>
              {data.strCategory}/ {data.strArea}
            </p>
          </section>
          <section>
            <img className="w-full my-5" src={data.strMealThumb} alt="." />
          </section>
          <section>{}</section>
          <section>
            <h4 className="text-white my-2">Recipe</h4>
            {data.strInstructions}
          </section>
          <section>
            <h4 className="text-white my-2">Watch Video</h4>
            <iframe
              src={(data.strYoutube || "").replace("watch?v=", "embed/")}
              title="wewe"
              frameBorder="0"
              className="w-full max-w-md m-auto"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </section>
        </>
      )}
    </div>
  );
};

export default MealRecipe;
