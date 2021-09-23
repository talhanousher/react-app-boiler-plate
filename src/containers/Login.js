import React from 'react';
import { Row, Col, Form, Input, Button, Checkbox } from 'antd';
import { Link, useHistory } from "react-router-dom";
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { setItem } from '../services/local-storage';

export default function Login() {
  const history = useHistory();
  
  const onFinish = (values) => {
    setItem("user", JSON.stringify(values));
    setTimeout(() => {
      history.push('/main/dashboard');
    }, 1000)
  };

  const onFinishFailed = (error) => {
    console.log('Failed:', error);
  };

  return (
    <div className="Login">
      <Row align="middle" className="login-form">
        <Col span={6} offset={8}>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your Username!',
                },
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Link className="login-form-forgot">
                Forgot password
              </Link>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
        </Button>
        Or <Link to="/auth/register">register now!</Link>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};