import { useEffect, useState } from "react";
import { fetchDataDetailRecipes } from "../../service/recipes.service";
import ImageRecipes from "../atoms/ImageRecipes";
import ContentIngredients from "../molecules/ContentIngredients";
import ContentTitleDetail from "../molecules/ContentTitleDetail";
import { useParams } from "react-router-dom";
import ContentInstruction from "../molecules/ContentInstruction";

const MainContentDetail = () => {
  const [detail, setDetail] = useState([]);
  const [ingredient, setIngredient] = useState([]);
  const [instruction, setIntruction] = useState([]);
  const params = useParams();
  const fetchDataDetail = async (id) => {
    const data = await fetchDataDetailRecipes(id);
    setDetail(data.data);
    setIngredient(data.data.ingredients);
    setIntruction(data.data.instructions);
  };
  useEffect(() => {
    fetchDataDetail(params.id);
  }, [params]);
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-center mt-5">
        <ImageRecipes image={detail.image} />
      </div>
      <div className="flex justify-center">
        <ContentTitleDetail title={detail.name} />
      </div>
      <div className="flex justify-center">
        <ContentIngredients ingredient={ingredient} />
      </div>
      <div className="flex justify-center">
        <ContentInstruction instruction={instruction} />
      </div>
    </div>
  );
};

export default MainContentDetail;
