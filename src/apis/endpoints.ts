import { base_url } from "./config";
import type { category, categoryMeal } from "./types";

const getItems = async <T>(
  url: string /* param: Record<string, unknown> */
): Promise<T> => {
  const response = await fetch(base_url + url);
  if (!response.ok) {
    throw new Error(" Endpoint fail");
  }

  return response.json();
};

const getCategories = async () => {
  const data: { categories: category[] } = await getItems("/categories.php");
  return data.categories;
};

const getCategoriesMeals = async (category: string = "beef") => {
  console.log(category);

  const data: { meals: categoryMeal[] } = await getItems(
    `/filter.php?c=${category}`
  );
  console.log(data);

  return data.meals;
};

const getMealRecipe = async (id: string) => {
  console.log(id);

  const data: any = await getItems(`/lookup.php?i=${id}`);

  return (data?.meals || [])[0];
};

export { getCategories, getCategoriesMeals, getMealRecipe };
