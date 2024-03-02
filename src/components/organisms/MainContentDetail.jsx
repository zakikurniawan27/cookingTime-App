import { useEffect } from "react";
import ImageRecipes from "../atoms/ImageRecipes";
import ContentIngredients from "../molecules/ContentIngredients";
import ContentTitleDetail from "../molecules/ContentTitleDetail";
import { useParams } from "react-router-dom";
import ContentInstruction from "../molecules/ContentInstruction";
import { useDispatch, useSelector } from "react-redux";
import { getDataDetailRecipesCall } from "../../store/action/recipesAction";

const MainContentDetail = () => {
  const params = useParams();
  const { detail } = useSelector((state) => state.recipes);
  const { detailIngredient } = useSelector((state) => state.recipes);
  const { detailInstruction } = useSelector((state) => state.recipes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataDetailRecipesCall(params.id));
  }, [params, dispatch]);
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-center mt-5">
        <ImageRecipes image={detail.image} />
      </div>
      <div className="flex justify-center">
        <ContentTitleDetail title={detail.name} />
      </div>
      <div className="flex justify-center">
        <ContentIngredients ingredient={detailIngredient} />
      </div>
      <div className="flex justify-center">
        <ContentInstruction instruction={detailInstruction} />
      </div>
    </div>
  );
};

export default MainContentDetail;
