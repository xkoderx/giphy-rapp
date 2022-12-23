import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpert = () => {
  const [categories, setCategories] = useState([]);
  const onAddCategory = (newC) => {
    if (categories.includes(newC, ...categories)) return;
    setCategories([newC, ...categories]);
  };
  return (
    <>
      <h1 className="m-3">Giphsyc</h1>
      <AddCategory newC={onAddCategory}></AddCategory>
      {/* <AddCategory category={setCategories}></AddCategory> */}
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
    </>
  );
};
