import { Card, Input, Layout, Space, Form, Checkbox, Button, Flex } from "antd";
import { LockFilled, UserOutlined, LockOutlined } from "@ant-design/icons";
import Logo from "../../components/icons/logo";
const LoginPage = () => {
    return (
        <>
            <Layout
                style={{
                    height: "100vh",
                    display: "grid",
                    placeItems: "center",
                }}
            >
                <Space direction='vertical' size='large'>
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
                        >
                            <Form.Item
                                name='username'
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
                                <Input
                                    prefix={<UserOutlined />}
                                    placeholder='Username'
                                />
                            </Form.Item>
                            <Form.Item
                                name='password'
                                rules={[
                                    {
                                        required: true,
                                        message: "Please enter your password",
                                    },
                                    {
                                        pattern:
                                            /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/,
                                        message:
                                            "Password must be 6-20 chars with a letter and a number",
                                    },
                                ]}
                            >
                                <Input.Password
                                    prefix={<LockOutlined />}
                                    placeholder='Password'
                                />
                            </Form.Item>

                            <Flex style={{ justifyContent: "space-between" }}>
                                <Form.Item
                                    name='remember'
                                    valuePropName='checked'
                                >
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                                <a href='#' id='login-form-forgot'>
                                    Forgot password?
                                </a>
                            </Flex>
                            <Form.Item>
                                <Button
                                    type='primary'
                                    htmlType='submit'
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
