import LoginForm from "./components/LoginForm";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Please Login</h1>
        <LoginForm />
      </div>
    </div>
  );
}
