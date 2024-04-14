import Login from "../components/Login.jsx";
import Head from "../components/Head.jsx";
import illustration from "../assets/illustration.png";
import LoginButton from "../components/LogInButton.jsx";

const LoginPage = () => {
  const style = {
    h1: {
      color: "white",
      textAlign: "center",
      fontFamily: "Helvetica Neue",
      fontWeight: "400",
      margin: "none",
      paddingTop: "50px",
    },

    h4: {
      color: "white",
      textAlign: "center",
      fontFamily: "Helvetica Neue",
      fontWeight: "300",
    },

};

  return (
    <div
      style={{
        backgroundImage: `url(${illustration})`,
        minHeight: "91vh",
        height: "auto",
      }}
    >
      <div style={{ paddingTop: "120px" }}>
        <h1 style={style.h1}> Login to the Data Commons</h1>
        <h3 style={style.h4}> Sign in to continue </h3>
        <div
          style={{
            display: "flex",
            alignSelf: "center",
            justifyContent: "center",
          }}
        >
          <Login />
        </div>
        <div
          style={{
            display: "flex",
            alignSelf: "center",
            justifyContent: "center",
            paddingTop: "30px",
          }}
        >
          <LoginButton />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
