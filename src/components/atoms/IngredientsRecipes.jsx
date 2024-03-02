const IngredientsRecipes = (props) => {
  const ingredient = props.ingredient;
  return (
    <table className="w-full text-black">
      <tbody>
        {ingredient.map((item, index) => (
          <tr key={index} className="border-b border-gray-500">
            <td className="text-sm sm:text-lg">{item}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default IngredientsRecipes;
