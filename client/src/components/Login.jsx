import { Form, useLocation} from "react-router-dom"
import Input from "./Input";


const Login = () => {
  return (
    <div>
      <Input children="email" />
      <Input children="password" />
    </div>
  );
};

export default Login;
