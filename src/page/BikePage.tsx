// import Spline from "@splinetool/react-spline";
import NavHeader from "../components/NavHeader";
import DisplayBikeDataList from "../LPRDataFolder/DisplayLPRData";

const BikePage = () => {
  return (
    <div className="container">
      <section className="notes-container">
        <NavHeader />
        <div className="notes-container-contents"></div>
        <DisplayBikeDataList></DisplayBikeDataList>
      </section>
    </div>
  );
};

export default BikePage;
