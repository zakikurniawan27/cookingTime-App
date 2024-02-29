import ContentTitle from "../organisms/ContentTitle";
import MainContent from "../organisms/MainContent";
import Navbar from "../organisms/navbar";
import { useState } from "react";

const TemplateHome = () => {
  const navbar = true;
  const mainContent = true;
  const [recipes, setRecipes] = useState([]);
  const [category, setCategory] = useState([]);
  return (
    <div className="bg-orange-50">
      <Navbar navbar={navbar} />
      <section className="mt-1 pb-5">
        <ContentTitle mainContent={mainContent} setRecipes={setRecipes} />
      </section>
      <section className="mt-20 mx-5 sm:mx-20 pb-5">
        <MainContent
          recipes={recipes}
          setRecipes={setRecipes}
          category={category}
          setCategory={setCategory}
        />
      </section>
    </div>
  );
};

export default TemplateHome;
