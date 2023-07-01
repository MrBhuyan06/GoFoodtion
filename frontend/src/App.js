import { Header, Fotter } from "./components";
import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <AnimatePresence>
      <div className="w-screen h-auto flex-col  ">
        <Header />
        <Outlet />
        <Fotter />
      </div>
    </AnimatePresence>
  );
};
export default App;
