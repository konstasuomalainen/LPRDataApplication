// import Spline from "@splinetool/react-spline";
import NavHeader from "../components/NavHeader";
import DisplayLPRDataList from "../LPRDataFolder/DisplayLPRData";

const LPRDataPage = () => {
  return (
    <div className="container">
      <section className="notes-container">
        <NavHeader />
        <div className="notes-container-contents"></div>
        <DisplayLPRDataList></DisplayLPRDataList>
      </section>
    </div>
  );
};

export default LPRDataPage;
