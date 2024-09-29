import noteSVG from "../assets/notes.svg";
const NavHeader = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="leftSide">
          <img className="svg" src={noteSVG} alt="" />
          <p>MUISTIO-NOTES</p>
        </div>

        <button>LOGIN</button>
      </div>
    </nav>
  );
};

export default NavHeader;
