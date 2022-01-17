import "./App.css";
import { AppRouting } from "./App.route";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <AppRouting />
      <ToastContainer />
    </>
  );
}

export default App;
