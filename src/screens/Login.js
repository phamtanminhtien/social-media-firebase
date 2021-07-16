import React, { useState } from "react";
import styled from "styled-components";
import LoginBackground from "../assets/images/loginbackground.jpg";
import FormForgotPassword from "../components/Login/FormForgotPassword";
import FormRegister from "../components/Login/FormRegister";
import FormSignIn from "../components/Login/FormSignIn";
import LOGIN from "../constants/login";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
`;

const Background = styled.div`
  display: inline-block;
  height: 100%;
  position: relative;

  &:before {
    top: 0;
    bottom: 0;
    right: 0;
    left: 30%;
    position: absolute;
    content: "";
    background-image: linear-gradient(to right, #fff0, #fff);
  }
`;
const Img = styled.img`
  height: 100%;
`;

const FormCover = styled.div`
  position: absolute;
  top: 50%;
  right: 10%;
  transform: translateY(-50%);
`;

function Login() {
  const [panel, setPanel] = useState(LOGIN.SIGN_IN);
  return (
    <Container>
      <Background>
        <Img src={LoginBackground}></Img>
      </Background>
      <FormCover>
        {panel === LOGIN.SIGN_IN && <FormSignIn setPanel={setPanel} />}
        {panel === LOGIN.REGISTER && <FormRegister setPanel={setPanel} />}
        {panel === LOGIN.FORGOT && <FormForgotPassword setPanel={setPanel} />}
      </FormCover>
    </Container>
  );
}

export default Login;
