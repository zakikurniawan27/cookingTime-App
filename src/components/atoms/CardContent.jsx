import { Link } from "react-router-dom";
import { fetchDataRecipes } from "../../service/recipes.service";
import { useEffect } from "react";
import Badge from "./Badge";

const CardContent = ({
  recipes,
  setRecipes,
  category,

  onCategory,
}) => {
  const getDataRecipes = async () => {
    const data = await fetchDataRecipes();
    setRecipes(data.data.recipes);
  };
  useEffect(() => {
    getDataRecipes();
  }, []);
  return (
    <>
      {onCategory == false
        ? recipes.map((item) => (
            <div
              className="w-44 sm:w-60 md:w-48 lg:w-56 xl:w-60 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-50"
              key={item.id}
            >
              <div>
                <img className="rounded-t-lg" src={item.image} alt="" />
              </div>
              <div className="md:p-5">
                <div href="#">
                  <h5 className="mb-2 text-xs lg:text-lg font-bold text-gray-900">
                    <Link to={item.id}>{item.name}</Link>
                  </h5>
                </div>
                <div className="mb-2">
                  <Badge mealType={item.mealType[0]} />
                  {item.mealType[1] ? (
                    <Badge mealType={item.mealType[1]} />
                  ) : item.mealType[3] ? (
                    <Badge mealType={item.mealType[2]} />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          ))
        : onCategory == true
        ? category.map((item) => (
            <div
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-50"
              key={item.id}
            >
              <div>
                <img className="rounded-t-lg" src={item.image} alt="" />
              </div>
              <div className="p-5">
                <div href="#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                    <Link to={item.id}>{item.name}</Link>
                  </h5>
                </div>
                <Badge mealType={item.mealType[0]} />
                {item.mealType[1] ? (
                  <Badge mealType={item.mealType[1]} />
                ) : item.mealType[3] ? (
                  <Badge mealType={item.mealType[2]} />
                ) : (
                  ""
                )}
              </div>
            </div>
          ))
        : ""}
    </>
  );
};

export default CardContent;
