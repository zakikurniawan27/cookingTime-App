import { useDispatch } from "react-redux";
import recipes from "../../database/json/RecipesTags.json";
import {
  getDataCategoryRecipesCall,
  getDataRecipesCall,
} from "../../store/action/recipesAction";

const ButtonTags = ({ setOnCategory }) => {
  const dispatch = useDispatch();
  const clickMenu = async (category) => {
    if (category.value == "all") {
      dispatch(getDataRecipesCall());
      setOnCategory(false);
    } else {
      dispatch(getDataCategoryRecipesCall(category.value));
      setOnCategory(true);
    }
  };

  return (
    <>
      {recipes.map((item, index) => (
        <button
          key={index}
          className="w-10 h-6 md:w-14 md:h-10 bg-white rounded-lg shadow text-gray-900 text-xs hover:bg-orange-500 hover:text-white"
          onClick={() => clickMenu(item)}
        >
          {item.label}
        </button>
      ))}
    </>
  );
};

export default ButtonTags;
