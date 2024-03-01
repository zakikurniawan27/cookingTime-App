import TitleRecipes from "../atoms/TitleRecipes";

const ContentTitleDetail = ({ title }) => {
  return (
    <div className="bg-white w-96 sm:w-3/5 p-5 rounded-xl text-start">
      <TitleRecipes title={title} />
    </div>
  );
};

export default ContentTitleDetail;
