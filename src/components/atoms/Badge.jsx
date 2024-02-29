const Badge = ({ mealType }) => {
  return (
    <div className="badge bg-orange-500 text-white text-xs border-white">
      {mealType}
    </div>
  );
};

export default Badge;
