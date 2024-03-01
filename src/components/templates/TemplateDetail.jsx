import Footer from "../organisms/Footer";
import MainContentDetail from "../organisms/MainContentDetail";
import Navbar from "../organisms/navbar";

const TemplateDetail = () => {
  const detail = true;
  return (
    <div className="bg-orange-50">
      <Navbar detail={detail} />
      <section>
        <MainContentDetail />
      </section>
      <Footer />
    </div>
  );
};

export default TemplateDetail;
