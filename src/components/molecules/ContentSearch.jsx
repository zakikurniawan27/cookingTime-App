import InputGroupSearch from "../atoms/InputGroupSearch";

const ContentSearch = ({ setRecipes }) => {
  return (
    <div id="search" className="block">
      <InputGroupSearch setRecipes={setRecipes} />
    </div>
  );
};

export default ContentSearch;
