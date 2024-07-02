import {
  Card,
  Input,
  Layout,
  Space,
  Form,
  Checkbox,
  Button,
  Flex,
  Alert,
} from "antd";
import { LockFilled, UserOutlined, LockOutlined } from "@ant-design/icons";
import Logo from "../../components/icons/logo";
import { useMutation } from "@tanstack/react-query";
import { Credentials } from "../../types";
import { login } from "../../http/api";

const loginUser = async (credentials: Credentials) => {
  const { data } = await login(credentials);
  return data;
};
const LoginPage = () => {
  const { mutate, isPending, isError, error } = useMutation({
    mutationKey: ["login"],
    mutationFn: loginUser,
    onSuccess: async () => {
      console.log("Login Successful");
    },
  });

  return (
    <>
      <Layout
        style={{
          height: "100vh",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Space direction="vertical" size="large">
          <Layout.Content
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Logo />
          </Layout.Content>
          <Card
            style={{
              width: 300,
            }}
            bordered={false}
            title={
              <Space
                style={{
                  width: "100%",
                  fontSize: 16,
                  justifyContent: "center",
                }}
              >
                <LockFilled />
                Sign in
              </Space>
            }
          >
            <Form
              initialValues={{
                remember: true,
              }}
              onFinish={(values) => {
                mutate({ email: values.username, password: values.password }),
                  console.log("Values", values);
              }}
            >
              {isError && <Alert type="error" message={error.message} />}
              {/* // we have to be careful while displaying errors on the client
              because sometimes server sends internal errors for example related
              to db with columns in question, we have to handle these types of
              error on the server so that those don't get passed down to the
              client */}
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please enter your username",
                  },
                  {
                    type: "email",
                    message: "Email is not valid",
                  },
                ]}
              >
                <Input prefix={<UserOutlined />} placeholder="Username" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please enter your password",
                  },
                  {
                    pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/,
                    message:
                      "Password must be 6-20 chars with a letter and a number",
                  },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder="Password"
                />
              </Form.Item>
              <Flex style={{ justifyContent: "space-between" }}>
                <Form.Item name="remember" valuePropName="checked">
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <a href="#" id="login-form-forgot">
                  Forgot password?
                </a>
              </Flex>
              <Form.Item>
                <Button
                  type="primary"
                  loading={isPending}
                  disabled={isPending}
                  htmlType="submit"
                  style={{ width: "100%" }}
                >
                  Log in{" "}
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Space>
      </Layout>
    </>
  );
};
export default LoginPage;
