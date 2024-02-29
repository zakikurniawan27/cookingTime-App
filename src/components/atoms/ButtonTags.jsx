import recipes from "../../database/json/RecipesTags.json";
import {
  fetchDataCategoryRecipes,
  fetchDataRecipes,
} from "../../service/recipes.service";

const ButtonTags = ({ setCategory, setOnCategory }) => {
  const clickMenu = async (category) => {
    if (category.value == "all") {
      fetchDataRecipes((setOnCategory = { setOnCategory }));
    } else {
      const data = await fetchDataCategoryRecipes(category.value);
      setCategory(data.data.recipes);
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
