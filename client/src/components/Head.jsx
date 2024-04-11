import "./Head.css";
import Login from "./Login.jsx"
import logoWEHI from "/src/assets/logo@2x-compressed.webp";
import searchBox from "/src/assets/search-svgrepo-com.svg";
import clipArt from "/src/assets/PinClipart.com_male-clipart_1332476.png"
import menu from "/src/assets/hamburger-menu-5.png"

const Head = () => {
  return (
    <>
      <header>
        <div className="head">
          <a href="https://www.wehi.edu.au">
            <img src={logoWEHI} width="114px" height="41px" className="logo" />
          </a>
          <h3 className="head">Data Commons- Dataset Registry</h3>
        </div>

        <div className="icon_nav">
          <div className="searchbox">
            <div>Search</div>
            <img src={searchBox} width='20px'/>
          </div>
          <img
            src={clipArt}
            width="30px"
          />
          <img src={menu} width="40px" />
        </div>
      </header>

      <h1> Login to the Data Commons</h1>
      <h4> Sign in to continue </h4>

      <Login/>

    </>
  );
}

export default Head;
