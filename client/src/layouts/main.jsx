import {Outlet, useLoaderData} from "react-router-dom"

//Assets
import Head from "../components/Head"
import RegistrationTable from "../components/RegistrationTable"




const Main = () => {
  return (
    <div className="layout">
        <Head/>
        <main>
            <RegistrationTable/>
            <Outlet/>
        </main>
    </div>
  )
}

export default Main