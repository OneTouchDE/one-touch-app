import OneTouchIcon from "../assets/OneTouchIcon.svg";
const Login = () => {
  return (
    <div>
      <img src={OneTouchIcon} alt="Icon" />
      <h3>ONE TOUCH</h3>
      <p>Feel more connected</p>

      <form>
        <h3>Login</h3>
        <label htmlFor="username">Email</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="abc@mail.com"
          required
        />
        <label htmlFor="password">Password </label>
        <input
          type="text"
          name="password"
          id="password"
          placeholder="Password"
          required
        />
        <button type="submit">LogIn</button>
      </form>
    </div>
  );
};

export default Login;
