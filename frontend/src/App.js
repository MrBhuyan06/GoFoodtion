import { Header, Fotter } from "./components";
import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { StateProvider, useStateValue } from "./context/StateProvider.js";
import { initialState } from "./context/initalState.js";
import reducer from "./context/reducers.js";
import { getAllFoodItems } from "./utils/firebaseFunction.js";
import { useEffect } from "react";

const App = () => {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <AnimatePresence mode="wait">
        <div className="w-screen h-auto flex-col  ">
          <Header />
          <Outlet />
          <Fotter />
        </div>
      </AnimatePresence>
    </StateProvider>
  );
};
export default App;

/* <StateProvider initialState={initialState} reducer={reducer}></StateProvider> */
