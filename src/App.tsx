//import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import { getCategories } from "./apis/endpoints";
import Home from "./pages/home/Home";
import type { category } from "./apis/types";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about/About";
import Topbar from "./pages/Topbar";
import CategoryMeals from "./pages/CategoryMeals";
import MealRecipe from "./pages/MealRecipe";

function App({ categoriesList: [] = [] }) {
  const [data, setData] = useState<category[]>([]);
  const getData = async () => {
    const _data = await getCategories();
    setData(_data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="bg-teal-50 h-full border-2 overflow-auto">
        <BrowserRouter>
          <Topbar />
          <div className="max-w-200 text-center m-auto">
            <Routes>
              <Route path="/" element={<Home categories={data} />} />
              <Route path="/categoryMeals" element={<CategoryMeals />} />
              <Route path="/meal" element={<MealRecipe />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
