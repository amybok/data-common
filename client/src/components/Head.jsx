import "./Head.css";
import logoWEHI from "/src/assets/logo@2x-compressed.webp";
import clipArt from "/src/assets/PinClipart.com_male-clipart_1332476.png"
import menu from "/src/assets/hamburger-menu-5.png"
import SearchBox from "./SearchBox.jsx";

const Head = () => {
  return (
    <>
      <header  style={{display: "flex", alignItems: "center", 
            justifyContent: "space-between", paddingTop:"5px", paddingBottom:"5px"}}>
        <div className="head">
          <a href="https://www.wehi.edu.au">
            <img src={logoWEHI} width="114px" height="41px" className="logo" />
          </a>
          <h3 className="head">Data Commons- Dataset Registry</h3>
        </div>

        <div className="icon_nav">
          <SearchBox/>
          <img
            src={clipArt}
            width="30px"
          />
          <img src={menu} width="40px" />
        </div>
      </header>

    </>
  );
}

export default Head;
