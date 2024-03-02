const IntructionRecipes = ({ instruction }) => {
  return (
    <>
      {instruction.map((item, index) => (
        <p key={index} className="text-sm sm:text-lg text-black">
          - {item}
        </p>
      ))}
    </>
  );
};

export default IntructionRecipes;
