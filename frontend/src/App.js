import { Header, Fotter } from "./components";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="w-screen h-auto flex-col  ">
        <Header />
        <Outlet />
        <Fotter />
      </div>
    </>
  );
};
export default App;
