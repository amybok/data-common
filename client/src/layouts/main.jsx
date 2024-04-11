import {Outlet, useLoaderData} from "react-router-dom"

//Assets
import wave from "../assets/wave.svg"
import LoginPage from "../pages/LoginPage"



const Main = () => {
  return (
    <div className="layout">
        <main>
            <LoginPage/>
            <Outlet/>
        </main>
        <img src={wave} alt=""/>
    </div>
  )
}

export default Main