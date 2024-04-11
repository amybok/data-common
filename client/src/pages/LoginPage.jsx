import Login from "../components/Login.jsx"
import Head from "../components/Head.jsx"
import illustration from "../assets/illustration.png"

const LoginPage = () => {

    const style = {
        h1: {
            color: "white",
            textAlign: "center",
            fontFamily: "Helvetica Neue",
            fontWeight: "400",
            margin: "none",
            paddingTop: "50px"
        },

        h4: {
            color: "white",
            textAlign: "center",
            fontFamily: "Helvetica Neue",
            fontWeight: "300"
        }
    }

    return (
        <div style={{backgroundImage:`url(${illustration})`}}>
            <h1 style={style.h1}> Login to the Data Commons</h1>
            <h3 style={style.h4}> Sign in to continue </h3>
            <Login/>
        </div>
    )
}

export default LoginPage;