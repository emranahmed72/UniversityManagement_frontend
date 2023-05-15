import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/uni_api/generateToken", {
        username,
        password
      });
      const token = response.data.token;
      localStorage.setItem('token', token);

      const ruleResponse = await axios.get("http://localhost:8080/uni_api/passChangeAndGetRule/getRule", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      });
      console.log(ruleResponse);

      const rule = ruleResponse.data[0].roleName;
      console.log(ruleResponse);
      console.log(rule);


      switch (rule) {
        case "ROLE_SUPER_ADMIN":
          navigate("/admin");
          break;
        case "STUDENT":
          navigate("/student");
          break;
        case "TEACHER":
          navigate("/teacher");
          break;
        default:
          console.error("Invalid user role!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleLogin} style={{ textAlign: 'center', backgroundColor: '#73A9AD',color: 'white' }}>
      <br />
      <br />
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <br />
      <button type="submit">Log In</button>
      <br />
      <br />
    </form>
  );
};

export default LoginPage;
