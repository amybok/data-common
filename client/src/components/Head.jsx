import "./Head.css";
import logoWEHI from "/src/assets/logo@2x-compressed.webp";
import clipArt from "/src/assets/PinClipart.com_male-clipart_1332476.png"
import menu from "/src/assets/hamburger-menu-5.png"
import SearchBox from "./SearchBox.jsx";
import { useLocation } from "react-router-dom";

const Head = () => {

  const location = useLocation();


  return (
    <div>
      {console.log(location)}
      <header  style={{display: "flex", alignItems: "center", 
            justifyContent: "space-between", paddingTop:"5px", paddingBottom:"5px"}}>
        <div className="head">
          <a href="https://www.wehi.edu.au">
            <img src={logoWEHI} width="114px" height="41px" className="logo" />
          </a>
          <h3 className="head">Data Commons - Dataset Registry</h3>
        </div>

        <div className="icon_nav">
          {/* this means if page = login then hide the searchbox by rendering an empty div */}
          {location.pathname === "/login" ? <div></div> : <SearchBox/>}
          <SearchBox/> {/* remove this to allow for above to work */}
          <img
            src={clipArt}
            width="30px"
          />
          <img src={menu} width="40px" />
        </div>
      </header>

    </div>
  );
}

export default Head;
