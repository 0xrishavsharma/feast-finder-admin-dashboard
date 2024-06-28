const LoginPage = () => {
    return (
        <>
            <h1>Sign in</h1>
            <input type='text' name='' placeholder='Username' id='' />
            <input type='text' name='' placeholder='Password' id='' />
            <button type='submit'>Log in</button>
            <label htmlFor='remember-me'>Remember me</label>
            <input type='checkbox' name='' id='remember-me' />
            <a href='#'>Forgot password?</a>
        </>
    );
};
export default LoginPage;
