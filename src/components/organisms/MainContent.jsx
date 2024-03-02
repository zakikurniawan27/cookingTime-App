import { useSelector } from "react-redux";
import CardContent from "../atoms/CardContent";
import TitleContent from "../atoms/TitleContent";
import ContentTags from "../molecules/ContentTags";
import { useState } from "react";

const MainContent = () => {
  const [onCategory, setOnCategory] = useState(false);
  const { data } = useSelector((state) => state.recipes);
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-start">
        <TitleContent />
      </div>
      <div className="flex justify-start">
        <ContentTags setOnCategory={setOnCategory} />
      </div>
      {data.length == 0 ? (
        <div className="h-[10.2rem] grid place-content-center text-black text-center font-bold text-xl">
          Data Not Found
        </div>
      ) : (
        <div className="justify-items-center grid grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 xl:grid xl:grid-cols-5 gap-4">
          <CardContent setOnCategory={setOnCategory} onCategory={onCategory} />
        </div>
      )}
    </div>
  );
};

export default MainContent;
