import logo from "../../assets/images/LogoAPP.png";

const LogoImage = ({ navbar, mainContent }) => {
  return (
    <img
      src={logo}
      alt="logoApp"
      className={
        navbar == true
          ? "w-28 sm:w-36 md:w-52"
          : mainContent == true
          ? "w-56 sm:w-72"
          : "w-28 sm:w-36 md:w-52"
      }
    />
  );
};

export default LogoImage;
