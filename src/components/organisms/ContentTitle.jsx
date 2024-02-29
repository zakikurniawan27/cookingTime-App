import LogoImage from "../atoms/LogoImage";
import ContentSearch from "../molecules/ContentSearch";

const TitleContent = ({ mainContent, setRecipes }) => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-center mt-5">
        <LogoImage mainContent={mainContent} />
      </div>
      <div>
        <ContentSearch setRecipes={setRecipes} />
      </div>
    </div>
  );
};

export default TitleContent;
