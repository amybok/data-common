import {Outlet, useLoaderData} from "react-router-dom"

//Assets
import wave from "../assets/wave.svg"
import LoginPage from "../pages/LoginPage"
import Head from "../components/Head"



const Main = () => {
  return (
    <div className="layout">
        <Head/>
        <main>
            <LoginPage/>
            <Outlet/>
        </main>
    </div>
  )
}

export default Main