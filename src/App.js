import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button/Button";

function App(props) {
  const { variant, size, disabled, children, ...rest } = props;

  const buttonClass = `button ${variant} ${size} ${disabled}`;
  return (
    <>
      <Button variant="primary" />
    </>
  );
}

export default App;
