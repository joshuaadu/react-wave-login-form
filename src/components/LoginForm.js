import Label from "./Label";
import classes from "./LoginForm.module.css";
const LoginForm = (props) => {
  return (
    <form className={classes.form}>
      <div className={classes["form-control"]}>
        <input type="email" name="email" id="email" required />
        <Label>Email</Label>
      </div>
      <div className={classes["form-control"]}>
        <input type="password" name="password" id="password" required />
        <Label>Password</Label>
      </div>
      <button className={classes.btn}>Login</button>
      <p className={classes["account-option-text"]}>
        Don't have an account? <a href="">Register</a>
      </p>
    </form>
  );
};

export default LoginForm;
