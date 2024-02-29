import CardContent from "../atoms/CardContent";
import TitleContent from "../atoms/TitleContent";
import ContentTags from "../molecules/ContentTags";
import { useState } from "react";

const MainContent = ({ category, setCategory, recipes, setRecipes }) => {
  const [onCategory, setOnCategory] = useState(false);
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-start">
        <TitleContent setRecipes={setRecipes} />
      </div>
      <div className="flex justify-start">
        <ContentTags setCategory={setCategory} setOnCategory={setOnCategory} />
      </div>
      {recipes.length == 0 ? (
        <div className="h-[10.2rem] grid place-content-center text-black text-center font-bold text-xl">
          Data Not Found
        </div>
      ) : (
        <div className="justify-items-center grid grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 xl:grid xl:grid-cols-5 gap-4">
          <CardContent
            recipes={recipes}
            setRecipes={setRecipes}
            category={category}
            setOnCategory={setOnCategory}
            onCategory={onCategory}
          />
        </div>
      )}
    </div>
  );
};

export default MainContent;
