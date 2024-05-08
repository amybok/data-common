import { Form, useLocation} from "react-router-dom"



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
      paddingBottom:"10px",
      boxShadow: "inset 0px 5px 10px 0px rgba(0, 0, 0, 0.5)"
    },
  }


  return (
    <div>
      <div className="input-group mb-3" style={{fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif", 
      display:"block"}}>
                <h4 style={style.label}>Username</h4>
                <input placeholder="Type your username" style={style.input}/>
      </div>
      <div className="input-group mb-3" style={{fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif", 
      display:"block"}}>
                <h4 style={style.label}>Password</h4>
                <input placeholder="Type your password" type="password" style={style.input}/>
      </div>

    </div>
  );
};

export default Login;
