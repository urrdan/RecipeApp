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
      <div className="bg-teal-50 h-full overflow-auto flex flex-col">
        <BrowserRouter>
          <Topbar />
          <div className="max-w-210 w-full text-center m-auto my-0 grow-1">
            <Routes>
              <Route path="/" element={<Home categories={data} />} />
              <Route path="/categoryMeals" element={<CategoryMeals />} />
              <Route path="/meal" element={<MealRecipe />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
          <footer className="bg-teal-800 p-4  text-center">
            <p className="text-white">Mohamed Abdulle &copy;2019</p>
          </footer>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
