import {Outlet, useLoaderData} from "react-router-dom"

//Assets
import Head from "../components/Head"




const Main = () => {
  return (
    <div className="layout">
        <Head/>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default Main