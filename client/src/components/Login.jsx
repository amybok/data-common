import { Form, useLocation} from "react-router-dom"
import Input from "./Input";


const Login = () => {

  const style = {
    label: {
      color: "white",
      textAlign: "left",
      fontFamily: "Helvetica Neue",
      fontWeight: "500"
    },
    input: {
      border: "0.5px solid",
      borderRadius: "10px",
      fontWeight: "500",
      paddingLeft:"10px",
      paddingRight:"70px",
      paddingTop:"10px",
      paddingBottom:"10px"
    },
  }


  return (
    <div>
      <div className="input-group mb-3" style={{fontFamily:"Readex Pro", display:"block"}}>
                <h4 style={style.label}>Username</h4>
                <input placeholder="Type your username" style={style.input}/>
      </div>
      <div className="input-group mb-3" style={{fontFamily:"Readex Pro", display:"block"}}>
                <h4 style={style.label}>Password</h4>
                <input placeholder="Type your password" type="password" style={style.input}/>
      </div>

    </div>
  );
};

export default Login;
