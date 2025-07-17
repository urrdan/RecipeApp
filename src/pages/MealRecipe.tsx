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
  //ingredients: string[];
};
const MealRecipe = () => {
  const [data, setData] = useState<mealDetails>();
  const [ingredients, setIngredients] = useState<string[]>([]);
  const id = new URLSearchParams(window.location.search).get("id") || "";
  const getData = async () => {
    const _data: mealDetails = await getMealRecipe(id);
    const _ingredients: string[] = [];
    let ingredientsFound = Object.keys(_data).filter((ingr) =>
      ingr.includes("strIngredient")
    );
    ingredientsFound.forEach((ingrProp) => {
      let ingrValue = _data[ingrProp as keyof typeof _data];
      if (ingrValue) _ingredients.push(ingrValue);
    });
    setIngredients(_ingredients);

    setData(_data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-[#343a40] p-4 pb-6 text-[#b4b4b4] sm:grid grid-cols-[1.5fr_2fr] gap-4 h-full w-full">
      {data && (
        <>
          <section className="col-span-full">
            <h4 className="text-white mt-2 mb-1">{data.strMeal}</h4>
            <p>
              {data.strCategory}/ {data.strArea}
            </p>
          </section>
          <section>
            <img
              className="w-full sm:mt-16 mt-8 rounded-lg"
              src={data.strMealThumb}
              alt="."
            />
          </section>
          <section className="col-start-1">
            <h4 className="text-white my-4">Ingedients</h4>
            <ul className="px-4">
              {ingredients.map((ele) => {
                return (
                  <li className="mx-1 inline-block before:content-['-_']">
                    {ele}
                  </li>
                );
              })}
            </ul>
          </section>
          <section className="row-start-2 row-span-4 col-start-2">
            <h4 className="text-white my-4">Recipe</h4>
            <p className="text-left">{data.strInstructions}</p>
          </section>
          <section className="col-start-1">
            <h4 className="text-white my-4">Watch Video</h4>
            <div className="recipe-video max-w-80 m-auto">
              <iframe
                src={(data.strYoutube || "").replace("watch?v=", "embed/")}
                title="wewe"
                frameBorder="0"
                className="w-full max-w-md m-auto"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default MealRecipe;
