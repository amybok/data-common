import { NavLink } from "react-router-dom";

const LoginButton = () => {

    const style = {
        button: {
            borderRadius:"5px", 
            padding:"5px 30px",
            fontFamily: "Helvetica Neue",
            backgroundColor: "darkslategrey",
            boxShadow: "1px 2px 2px hsl(0deg 0% 0% / 0.33)",
            color:"white",
            fontWeight: "200"
        }
    }

    return (
        <div className="LoginButton">
            <NavLink to={"/dataset"}>
                <button style={style.button}>
                    Log In
                </button>
            </NavLink>
        </div>
    )
}

export default LoginButton;