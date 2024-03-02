import { Link } from "react-router-dom";
import Badge from "./Badge";
import { useSelector } from "react-redux";

const CardContent = ({ onCategory }) => {
  const { data } = useSelector((state) => state.recipes);
  const { category } = useSelector((state) => state.recipes);

  return (
    <>
      {onCategory == false
        ? data.map((item) => (
            <div
              className="w-44 sm:w-60 md:w-48 lg:w-56 xl:w-60 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-50 hover:cursor-pointer"
              key={item.id}
            >
              <Link to={`detail/${item.id}`}>
                <div>
                  <img className="rounded-t-lg" src={item.image} alt="" />
                </div>
                <div className="md:p-5">
                  <div href="#">
                    <h5 className="mb-2 text-xs lg:text-lg font-bold text-gray-900">
                      {item.name}
                    </h5>
                  </div>
                  <div className="mb-2">
                    <Badge data={item.mealType[0]} />
                    {item.mealType[1] ? (
                      <Badge data={item.mealType[1]} />
                    ) : item.mealType[3] ? (
                      <Badge data={item.mealType[2]} />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </Link>
            </div>
          ))
        : onCategory == true
        ? category.map((item) => (
            <div
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-50 hover:cursor-pointer"
              key={item.id}
            >
              <Link to={`detail/${item.id}`}>
                <div>
                  <img className="rounded-t-lg" src={item.image} alt="" />
                </div>
                <div className="p-5">
                  <div href="#">
                    <h5 className="mb-2 text-xs lg:text-lg font-bold text-gray-900">
                      {item.name}
                    </h5>
                  </div>
                  <Badge data={item.mealType[0]} />
                  {item.mealType[1] ? (
                    <Badge data={item.mealType[1]} />
                  ) : item.mealType[3] ? (
                    <Badge data={item.mealType[2]} />
                  ) : (
                    ""
                  )}
                </div>
              </Link>
            </div>
          ))
        : ""}
    </>
  );
};

export default CardContent;
