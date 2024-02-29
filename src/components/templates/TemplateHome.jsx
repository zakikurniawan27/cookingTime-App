import ContentTitle from "../organisms/ContentTitle";
import MainContent from "../organisms/MainContent";
import Navbar from "../organisms/navbar";

const TemplateHome = () => {
  const navbar = true;
  const mainContent = true;
  return (
    <div className="bg-orange-50">
      <Navbar navbar={navbar} />
      <section className="mt-1 pb-5">
        <ContentTitle mainContent={mainContent} />
      </section>
      <section className="mt-20 mx-5 sm:mx-20 pb-5">
        <MainContent />
      </section>
    </div>
  );
};

export default TemplateHome;
