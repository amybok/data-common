import {Outlet, useLoaderData} from "react-router-dom"

//Assets
import wave from "../assets/wave.svg"



const Main = () => {
  return (
    <div className="layout">
        <main>
            <Outlet/>
        </main>
        <img src={wave} alt=""/>
    </div>
  )
}

export default Main