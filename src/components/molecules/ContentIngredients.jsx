import IngredientsRecipes from "../atoms/IngredientsRecipes";
import TitleIngredient from "../atoms/TitleIngredient";

const ContentIngredients = ({ ingredient }) => {
  return (
    <div className="bg-white p-3 w-96 sm:w-3/5 rounded-xl text-start">
      <TitleIngredient />
      <div className="pt-2">
        <IngredientsRecipes ingredient={ingredient} />
      </div>
    </div>
  );
};

export default ContentIngredients;
