import { UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Typography } from "antd";
import React from "react";
import styled from "styled-components";
import logoSrc from "../../assets/images/logo.svg";
import LOGIN from "../../constants/login";

const Panel = styled.div`
  width: 450px;
  text-align: center;
  border: 1px solid #ececec;
  padding: 50px;
  border-radius: 3px;
  box-shadow: 1px 1px 6px 0px #00000017;
`;

const Logo = styled.img`
  width: 30%;
`;

const Detail = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

function FormForgotPassword({ setPanel }) {
  return (
    <Panel>
      <Logo src={logoSrc}></Logo>
      <Typography.Title level="h1">Panel Forgot Password</Typography.Title>
      <Typography.Text level="3" strong>
        Forgot Password
      </Typography.Text>
      <Form style={{ marginTop: 30 }}>
        <Form.Item>
          <Input
            size="large"
            placeholder="Username"
            prefix={<UserOutlined />}
          ></Input>
        </Form.Item>
        <Button type="primary" htmlType="submit" block size="large">
          Submit
        </Button>
      </Form>
      <Detail>
        <Typography.Link
          onClick={() => {
            setPanel(LOGIN.SIGN_IN);
          }}
        >
          Sign In
        </Typography.Link>
        <Typography.Link
          onClick={() => {
            setPanel(LOGIN.REGISTER);
          }}
        >
          Create new account
        </Typography.Link>
      </Detail>
    </Panel>
  );
}

export default FormForgotPassword;
