import ButtonTags from "../atoms/ButtonTags";

const ContentTags = ({ setCategory, setOnCategory }) => {
  return (
    <div className="grid grid-cols-8 sm:grid sm:grid-cols-10 lg:flex md:flex-row gap-2">
      <ButtonTags setCategory={setCategory} setOnCategory={setOnCategory} />
    </div>
  );
};

export default ContentTags;
