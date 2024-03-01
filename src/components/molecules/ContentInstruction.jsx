import IntructionRecipes from "../atoms/IntructionRecipes";
import TitlteInstruction from "../atoms/TitlteInstruction";

const ContentInstruction = ({ instruction }) => {
  return (
    <div className="bg-white p-3 w-96 sm:w-3/5 rounded-xl text-start">
      <TitlteInstruction />
      <div className="pt-3">
        <IntructionRecipes instruction={instruction} />
      </div>
    </div>
  );
};

export default ContentInstruction;
