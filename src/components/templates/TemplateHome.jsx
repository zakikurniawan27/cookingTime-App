import ContentTitle from "../organisms/ContentTitle";
import Footer from "../organisms/Footer";
import MainContent from "../organisms/MainContent";
import Navbar from "../organisms/navbar";
import { useEffect } from "react";
import { getDataRecipesCall } from "../../store/action/recipesAction";
import { useDispatch } from "react-redux";

const TemplateHome = () => {
  const navbar = true;
  const mainContent = true;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataRecipesCall());
  }, [dispatch]);
  return (
    <div className="bg-orange-50">
      <Navbar navbar={navbar} />
      <section className="mt-1 pb-5">
        <ContentTitle mainContent={mainContent} />
      </section>
      <section className="mt-20 mx-5 sm:mx-20 pb-5">
        <MainContent />
      </section>
      <Footer />
    </div>
  );
};

export default TemplateHome;
